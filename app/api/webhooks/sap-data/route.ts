import { NextRequest } from 'next/server';

interface SAPDataPayload {
  company_code: string;
  materials: Array<{
    material_number: string;
    actual_cost: number;
    standard_cost: number;
    currency: string;
    cost_center: string;
  }>;
  cost_centers: Array<{
    cost_center: string;
    actual_amount: number;
    budget_amount: number;
    variance_percent: number;
  }>;
  period: string;
  total_amount: number;
  currency: string;
  source_system: string;
}

export async function POST(request: NextRequest) {
  try {
    const sapData: SAPDataPayload = await request.json();
    
    console.log('📊 SAP data received for analysis:', {
      company_code: sapData.company_code,
      materials_count: sapData.materials?.length || 0,
      cost_centers_count: sapData.cost_centers?.length || 0,
      total_amount: sapData.total_amount
    });

    // Validate required fields
    if (!sapData.company_code || !sapData.period) {
      return Response.json({ 
        error: 'Missing required fields: company_code, period' 
      }, { status: 400 });
    }

    // Forward to n8n for processing
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;
    if (!n8nWebhookUrl) {
      console.error('❌ N8N_WEBHOOK_URL not configured');
      return Response.json({ 
        error: 'n8n integration not configured' 
      }, { status: 500 });
    }

    // Add timestamp and processing metadata
    const enrichedData = {
      ...sapData,
      received_at: new Date().toISOString(),
      processing_id: `sap-${Date.now()}-${sapData.company_code}`,
      source: 'sapience-api'
    };

    // Send to n8n workflow
    const n8nResponse = await fetch(`${n8nWebhookUrl}/sap-data-received`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'SAPience-Webhook-Client'
      },
      body: JSON.stringify(enrichedData)
    });

    if (!n8nResponse.ok) {
      throw new Error(`n8n webhook failed: ${n8nResponse.status}`);
    }

    const n8nResult = await n8nResponse.json();
    console.log('✅ Successfully sent to n8n:', n8nResult);

    // Store in local cache for immediate UI updates
    if (typeof globalThis !== 'undefined') {
      globalThis.sapienceSAPData = globalThis.sapienceSAPData || new Map();
      globalThis.sapienceSAPData.set(enrichedData.processing_id, {
        ...enrichedData,
        status: 'processing',
        n8n_response: n8nResult
      });
    }

    return Response.json({ 
      success: true,
      processing_id: enrichedData.processing_id,
      message: 'SAP data sent to n8n for processing',
      n8n_status: 'sent'
    });

  } catch (error) {
    console.error('❌ Error processing SAP data:', error);
    return Response.json({ 
      error: 'Failed to process SAP data',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

export async function GET() {
  // Return recent SAP data submissions for debugging
  try {
    const data = globalThis.sapienceSAPData 
      ? Array.from(globalThis.sapienceSAPData.values())
      : [];
    
    return Response.json({ 
      count: data.length,
      recent_submissions: data.slice(-5).map(item => ({
        processing_id: item.processing_id,
        company_code: item.company_code,
        period: item.period,
        status: item.status,
        received_at: item.received_at
      }))
    });
  } catch (error) {
    return Response.json({ error: 'Failed to fetch SAP data' }, { status: 500 });
  }
}