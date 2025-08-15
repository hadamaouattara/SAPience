'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Database, RefreshCw, AlertCircle, CheckCircle } from 'lucide-react';

interface SAPStatusData {
  connected: boolean;
  entitySets: any[];
  lastSync: string;
  error?: string;
}

export function SAPConnectionStatus() {
  const [status, setStatus] = useState<SAPStatusData | null>(null);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);

  const fetchSAPStatus = async () => {
    try {
      const response = await fetch('/api/sap/entities');
      const result = await response.json();
      
      if (result.success) {
        setStatus({
          connected: true,
          entitySets: result.data.entitySets || [],
          lastSync: result.data.lastSync,
        });
      } else {
        setStatus({
          connected: false,
          entitySets: [],
          lastSync: '',
          error: result.message
        });
      }
    } catch (error) {
      setStatus({
        connected: false,
        entitySets: [],
        lastSync: '',
        error: 'Failed to connect to SAP'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSync = async () => {
    setSyncing(true);
    try {
      await fetchSAPStatus();
    } catch (error) {
      console.error('Sync failed:', error);
    } finally {
      setSyncing(false);
    }
  };

  useEffect(() => {
    fetchSAPStatus();
  }, []);

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Database className="w-5 h-5 mr-2" />
            SAP Connection
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-4">
            <RefreshCw className="w-4 h-4 animate-spin mr-2" />
            Checking connection...
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
            <Database className="w-5 h-5 mr-2" />
            SAP OData Connection
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleSync}
            disabled={syncing}
          >
            <RefreshCw className={`w-4 h-4 mr-2 ${syncing ? 'animate-spin' : ''}`} />
            Sync
          </Button>
        </CardTitle>
        <CardDescription>
          ACM_APPLWC service at 202.153.35.211:50000
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {status?.connected ? (
                <CheckCircle className="w-4 h-4 text-green-500" />
              ) : (
                <AlertCircle className="w-4 h-4 text-red-500" />
              )}
              <span className={`text-sm ${
                status?.connected ? 'text-green-600' : 'text-red-600'
              }`}>
                {status?.connected ? 'Connected' : 'Disconnected'}
              </span>
            </div>
            <Badge variant={status?.connected ? 'success' : 'destructive'}>
              {status?.connected ? 'Online' : 'Offline'}
            </Badge>
          </div>

          {status?.error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-600">{status.error}</p>
            </div>
          )}

          {status?.connected && (
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <div className="text-xl font-bold text-blue-600">
                  {status.entitySets.length}
                </div>
                <div className="text-sm text-gray-600">Total Entities</div>
              </div>
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <div className="text-xl font-bold text-green-600">
                  {status.entitySets.filter((e: any) => e.searchable).length}
                </div>
                <div className="text-sm text-gray-600">Searchable</div>
              </div>
            </div>
          )}

          {status?.lastSync && (
            <div className="text-xs text-gray-500">
              Last synchronized: {new Date(status.lastSync).toLocaleString()}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}