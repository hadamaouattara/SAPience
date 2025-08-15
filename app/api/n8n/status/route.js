import { NextResponse } from 'next/server';

const N8N_API_URL = process.env.N8N_API_URL || 'https://exonov-u39090.vm.elestio.app';
const N8N_API_KEY = process.env.N8N_API_KEY;

export async function GET() {
  try {
    if (!N8N_API_KEY) {
      return NextResponse.json(
        { error: 'N8N API key not configured' },
        { status: 500 }
      );
    }

    // Get workflow status from your n8n instance
    const workflowId = 'al75IbFKiuuhARMi'; // Your SAPience workflow ID
    
    const headers = {
      'X-N8N-API-KEY': N8N_API_KEY,
      'Content-Type': 'application/json',
    };

    // Fetch workflow details
    const workflowResponse = await fetch(`${N8N_API_URL}/api/v1/workflows/${workflowId}`, {
      headers,
    });

    if (!workflowResponse.ok) {
      throw new Error(`Failed to fetch workflow: ${workflowResponse.statusText}`);
    }

    const workflow = await workflowResponse.json();

    // Fetch recent executions
    const executionsResponse = await fetch(
      `${N8N_API_URL}/api/v1/executions?workflowId=${workflowId}&limit=10`,
      { headers }
    );

    let executions = [];
    if (executionsResponse.ok) {
      const executionsData = await executionsResponse.json();
      executions = executionsData.data || [];
    }

    // Calculate metrics
    const successfulExecutions = executions.filter(e => e.finished && !e.stoppedAt).length;
    const totalExecutions = executions.length;
    const successRate = totalExecutions > 0 ? (successfulExecutions / totalExecutions) * 100 : 0;
    
    const lastExecution = executions[0];
    const avgDuration = executions.length > 0 
      ? executions.reduce((acc, exec) => {
          if (exec.startedAt && exec.stoppedAt) {
            const duration = new Date(exec.stoppedAt) - new Date(exec.startedAt);
            return acc + duration;
          }
          return acc;
        }, 0) / executions.filter(e => e.startedAt && e.stoppedAt).length / 1000
      : 0;

    // Prepare response data
    const response = {
      workflow: {
        id: workflow.id,
        name: workflow.name,
        active: workflow.active,
        lastExecution: lastExecution?.startedAt || null,
        webhookUrl: `${N8N_API_URL}/webhook/sapience-acm-enhanced`,
      },
      metrics: {
        totalExecutions,
        successfulExecutions,
        successRate: Math.round(successRate * 100) / 100,
        avgDuration: Math.round(avgDuration * 100) / 100,
        errorCount: totalExecutions - successfulExecutions,
      },
      executions: executions.slice(0, 5).map(exec => ({
        id: exec.id,
        startedAt: exec.startedAt,
        stoppedAt: exec.stoppedAt,
        finished: exec.finished,
        mode: exec.mode,
        status: exec.finished ? (exec.stoppedAt ? 'success' : 'error') : 'running',
      })),
      sapConnection: {
        status: 'connected', // This would be determined by actual SAP ping
        endpoint: 'http://202.153.35.211:50000/sap/opu/odata/sap/ACM_APPLWC',
        lastSync: new Date().toISOString(),
      },
      aiAnalysis: {
        geminiModel: 'Gemini-1.5-Pro',
        chatgptModel: 'GPT-4o',
        lastBusinessAnalysis: lastExecution?.startedAt || null,
        lastTechnicalAnalysis: lastExecution?.startedAt || null,
        averageConfidence: 87, // This could be extracted from execution data
      },
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error fetching n8n status:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch n8n status',
        message: error.message,
        workflow: {
          id: 'al75IbFKiuuhARMi',
          name: 'SAPience Enhanced - Complete ML Workflow',
          active: true,
          lastExecution: null,
          webhookUrl: `${N8N_API_URL}/webhook/sapience-acm-enhanced`,
        },
        metrics: {
          totalExecutions: 0,
          successfulExecutions: 0,
          successRate: 0,
          avgDuration: 0,
          errorCount: 0,
        },
        executions: [],
        sapConnection: {
          status: 'unknown',
          endpoint: 'http://202.153.35.211:50000/sap/opu/odata/sap/ACM_APPLWC',
          lastSync: null,
        },
        aiAnalysis: {
          geminiModel: 'Gemini-1.5-Pro',
          chatgptModel: 'GPT-4o',
          lastBusinessAnalysis: null,
          lastTechnicalAnalysis: null,
          averageConfidence: 0,
        },
      },
      { status: 200 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    
    if (!N8N_API_KEY) {
      return NextResponse.json(
        { error: 'N8N API key not configured' },
        { status: 500 }
      );
    }

    // Trigger your n8n workflow
    const webhookUrl = `${N8N_API_URL}/webhook/sapience-acm-enhanced`;
    
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...body,
        source: 'sapience-dashboard',
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to trigger workflow: ${response.statusText}`);
    }

    const result = await response.json();

    return NextResponse.json({
      success: true,
      message: 'Workflow triggered successfully',
      executionId: result.executionId || 'unknown',
      data: result,
    });
  } catch (error) {
    console.error('Error triggering workflow:', error);
    return NextResponse.json(
      { 
        error: 'Failed to trigger workflow',
        message: error.message,
      },
      { status: 500 }
    );
  }
}