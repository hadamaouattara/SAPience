import { NextRequest } from 'next/server';

interface N8nWebhookPayload {
  analysis_id: string;
  company_code: string;
  github_issue_url?: string;
  anomalies_count: number;
  claude_analysis: string;
  status: 'completed' | 'failed';
}

export async function POST(request: NextRequest) {
  try {
    const payload: N8nWebhookPayload = await request.json();
    
    // Verify webhook authenticity (optional)
    const authHeader = request.headers.get('authorization');
    const expectedToken = process.env.SAPIENCE_API_TOKEN;
    
    if (expectedToken && authHeader !== `Bearer ${expectedToken}`) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }

    console.log('📊 n8n Analysis webhook received:', payload);

    // Store analysis result (could be database, cache, etc.)
    const analysisResult = {
      id: payload.analysis_id,
      companyCode: payload.company_code,
      githubIssueUrl: payload.github_issue_url,
      anomaliesCount: payload.anomalies_count,
      claudeAnalysis: payload.claude_analysis,
      status: payload.status,
      timestamp: new Date().toISOString(),
      processed: false
    };

    // In a real app, save to database
    // await db.analysis.create({ data: analysisResult });

    // For now, store in memory/cache (Redis in production)
    if (typeof globalThis !== 'undefined') {
      globalThis.sapienceAnalysisResults = globalThis.sapienceAnalysisResults || new Map();
      globalThis.sapienceAnalysisResults.set(payload.analysis_id, analysisResult);
    }

    // Optional: Trigger client-side updates via Server-Sent Events
    // await notifyClients('analysis-complete', analysisResult);

    // Optional: Send to other systems (notifications, dashboards, etc.)
    if (payload.status === 'completed' && payload.anomalies_count > 0) {
      console.log(`🚨 ${payload.anomalies_count} anomalies detected for ${payload.company_code}`);
      
      // Could trigger additional workflows
      // await triggerAnomalyNotifications(analysisResult);
    }

    return Response.json({ 
      success: true, 
      message: 'Analysis result processed',
      analysis_id: payload.analysis_id 
    });

  } catch (error) {
    console.error('❌ Error processing n8n webhook:', error);
    return Response.json({ 
      error: 'Internal server error' 
    }, { status: 500 });
  }
}

export async function GET() {
  // Return recent analysis results for debugging
  try {
    const results = globalThis.sapienceAnalysisResults 
      ? Array.from(globalThis.sapienceAnalysisResults.values())
      : [];
    
    return Response.json({ 
      count: results.length,
      results: results.slice(-10) // Last 10 results
    });
  } catch (error) {
    return Response.json({ error: 'Failed to fetch results' }, { status: 500 });
  }
}