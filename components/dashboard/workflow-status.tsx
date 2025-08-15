'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Activity, Play, RefreshCw } from 'lucide-react';

interface WorkflowStatusData {
  healthy: boolean;
  workflows: any[];
  summary: {
    totalWorkflows: number;
    activeWorkflows: number;
    mainWorkflows: number;
  };
}

export function WorkflowStatus() {
  const [status, setStatus] = useState<WorkflowStatusData | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchWorkflowStatus = async () => {
    try {
      const response = await fetch('/api/n8n/status');
      const result = await response.json();
      
      if (result.success) {
        setStatus(result.data);
      } else {
        setStatus({
          healthy: false,
          workflows: [],
          summary: {
            totalWorkflows: 0,
            activeWorkflows: 0,
            mainWorkflows: 0
          }
        });
      }
    } catch (error) {
      console.error('Failed to fetch workflow status:', error);
      setStatus({
        healthy: false,
        workflows: [],
        summary: {
          totalWorkflows: 0,
          activeWorkflows: 0,
          mainWorkflows: 0
        }
      });
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchWorkflowStatus();
    setRefreshing(false);
  };

  const executeWorkflow = async (workflowId: string) => {
    try {
      const response = await fetch('/api/n8n/execute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          workflowId,
          data: {
            action: 'manual_trigger',
            timestamp: new Date().toISOString()
          }
        }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setTimeout(fetchWorkflowStatus, 1000);
      }
    } catch (error) {
      console.error('Failed to execute workflow:', error);
    }
  };

  useEffect(() => {
    fetchWorkflowStatus();
  }, []);

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Activity className="w-5 h-5 mr-2" />
            n8n Workflows
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-4">
            <RefreshCw className="w-4 h-4 animate-spin mr-2" />
            Loading workflows...
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center">
            <Activity className="w-5 h-5 mr-2" />
            n8n Workflows
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleRefresh}
            disabled={refreshing}
          >
            <RefreshCw className={`w-4 h-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </CardTitle>
        <CardDescription>
          Automation and orchestration status
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <div className="text-lg font-bold text-blue-600">
                {status?.summary.totalWorkflows || 0}
              </div>
              <div className="text-xs text-gray-600">Total</div>
            </div>
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <div className="text-lg font-bold text-green-600">
                {status?.summary.activeWorkflows || 0}
              </div>
              <div className="text-xs text-gray-600">Active</div>
            </div>
            <div className="text-center p-3 bg-purple-50 rounded-lg">
              <div className="text-lg font-bold text-purple-600">
                {status?.summary.mainWorkflows || 0}
              </div>
              <div className="text-xs text-gray-600">Main</div>
            </div>
          </div>

          <div className="space-y-2">
            {status?.workflows.length ? (
              status.workflows.map((workflow: any) => (
                <div 
                  key={workflow.id} 
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-sm">{workflow.name}</span>
                      <Badge 
                        variant={workflow.active ? 'success' : 'secondary'}
                      >
                        {workflow.status}
                      </Badge>
                    </div>
                    <div className="text-xs text-gray-500">
                      ID: {workflow.id.substring(0, 8)}...
                    </div>
                  </div>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => executeWorkflow(workflow.id)}
                  >
                    <Play className="w-3 h-3" />
                  </Button>
                </div>
              ))
            ) : (
              <div className="text-center py-4 text-gray-500">
                {status?.healthy ? 'No workflows found' : 'n8n service unavailable'}
              </div>
            )}
          </div>

          <div className="flex items-center justify-between pt-2 border-t">
            <span className="text-sm text-gray-600">Service Health</span>
            <Badge variant={status?.healthy ? 'success' : 'destructive'}>
              {status?.healthy ? 'Healthy' : 'Unhealthy'}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}