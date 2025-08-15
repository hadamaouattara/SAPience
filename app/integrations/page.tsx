'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Zap, GitBranch, Activity, AlertTriangle } from 'lucide-react';

interface AnalysisResult {
  id: string;
  companyCode: string;
  githubIssueUrl?: string;
  anomaliesCount: number;
  claudeAnalysis: string;
  status: 'completed' | 'failed';
  timestamp: string;
}

interface SAPSubmission {
  processing_id: string;
  company_code: string;
  period: string;
  status: string;
  received_at: string;
}

export default function IntegrationsPage() {
  const [analysisResults, setAnalysisResults] = useState<AnalysisResult[]>([]);
  const [sapSubmissions, setSapSubmissions] = useState<SAPSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [testingWebhook, setTestingWebhook] = useState(false);

  useEffect(() => {
    fetchData();
    // Refresh every 30 seconds
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  const fetchData = async () => {
    try {
      const [analysisRes, sapRes] = await Promise.all([
        fetch('/api/webhooks/analysis-complete'),
        fetch('/api/webhooks/sap-data')
      ]);

      if (analysisRes.ok) {
        const analysisData = await analysisRes.json();
        setAnalysisResults(analysisData.results || []);
      }

      if (sapRes.ok) {
        const sapData = await sapRes.json();
        setSapSubmissions(sapData.recent_submissions || []);
      }
    } catch (error) {
      console.error('Failed to fetch integration data:', error);
    } finally {
      setLoading(false);
    }
  };

  const testSAPWebhook = async () => {
    setTestingWebhook(true);
    try {
      const testData = {
        company_code: "TEST001",
        materials: [
          {
            material_number: "MAT001",
            actual_cost: 125.50,
            standard_cost: 120.00,
            currency: "EUR",
            cost_center: "CC001"
          },
          {
            material_number: "MAT002", 
            actual_cost: 89.75,
            standard_cost: 95.00,
            currency: "EUR",
            cost_center: "CC002"
          }
        ],
        cost_centers: [
          {
            cost_center: "CC001",
            actual_amount: 15750.25,
            budget_amount: 15000.00,
            variance_percent: 5.0
          }
        ],
        period: "2024-08",
        total_amount: 15750.25,
        currency: "EUR",
        source_system: "SAP_S4_TEST"
      };

      const response = await fetch('/api/webhooks/sap-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(testData)
      });

      if (response.ok) {
        const result = await response.json();
        alert(`✅ Test successful! Processing ID: ${result.processing_id}`);
        fetchData(); // Refresh data
      } else {
        const error = await response.json();
        alert(`❌ Test failed: ${error.error}`);
      }
    } catch (error) {
      alert(`❌ Test failed: ${error}`);
    } finally {
      setTestingWebhook(false);
    }
  };

  if (loading) {
    return (
      <div className="p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/3"></div>
          <div className="h-32 bg-gray-200 rounded"></div>
          <div className="h-32 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">🔗 Intégrations SAPience</h1>
          <p className="text-muted-foreground">Connectivité n8n, GitHub et SAP en temps réel</p>
        </div>
        <Button 
          onClick={testSAPWebhook} 
          disabled={testingWebhook}
          className="flex items-center gap-2"
        >
          <Zap className="h-4 w-4" />
          {testingWebhook ? 'Test en cours...' : 'Tester SAP Webhook'}
        </Button>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">n8n Workflows</CardTitle>
            <Activity className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Workflows actifs</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">GitHub Actions</CardTitle>
            <GitBranch className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">✅</div>
            <p className="text-xs text-muted-foreground">Intégration active</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Analyses SAP</CardTitle>
            <AlertTriangle className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analysisResults.length}</div>
            <p className="text-xs text-muted-foreground">Analyses completées</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Soumissions SAP</CardTitle>
            <ExternalLink className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{sapSubmissions.length}</div>
            <p className="text-xs text-muted-foreground">Données reçues</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Analysis Results */}
      <Card>
        <CardHeader>
          <CardTitle>📊 Résultats d'Analyse Récents</CardTitle>
          <CardDescription>Analyses Claude générées via n8n</CardDescription>
        </CardHeader>
        <CardContent>
          {analysisResults.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">
              Aucune analyse disponible. Testez le webhook SAP pour générer des données.
            </p>
          ) : (
            <div className="space-y-4">
              {analysisResults.map((result) => (
                <div key={result.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <Badge variant={result.status === 'completed' ? 'default' : 'destructive'}>
                        {result.status}
                      </Badge>
                      <span className="ml-2 font-medium">Company: {result.companyCode}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {new Date(result.timestamp).toLocaleString()}
                    </div>
                  </div>
                  
                  <div className="text-sm space-y-2">
                    <p><strong>Anomalies détectées:</strong> {result.anomaliesCount}</p>
                    {result.githubIssueUrl && (
                      <a 
                        href={result.githubIssueUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-blue-600 hover:underline"
                      >
                        <ExternalLink className="h-3 w-3" />
                        Voir l'issue GitHub
                      </a>
                    )}
                    <details className="mt-2">
                      <summary className="cursor-pointer text-sm font-medium">
                        Analyse Claude ▼
                      </summary>
                      <pre className="mt-2 text-xs bg-gray-50 p-2 rounded overflow-auto">
                        {result.claudeAnalysis}
                      </pre>
                    </details>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Recent SAP Submissions */}
      <Card>
        <CardHeader>
          <CardTitle>📤 Soumissions SAP Récentes</CardTitle>
          <CardDescription>Données SAP reçues et traitées</CardDescription>
        </CardHeader>
        <CardContent>
          {sapSubmissions.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">
              Aucune soumission SAP récente.
            </p>
          ) : (
            <div className="space-y-2">
              {sapSubmissions.map((submission) => (
                <div key={submission.processing_id} className="flex justify-between items-center p-3 border rounded">
                  <div>
                    <span className="font-medium">{submission.company_code}</span>
                    <span className="mx-2 text-muted-foreground">•</span>
                    <span className="text-sm">Période: {submission.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{submission.status}</Badge>
                    <span className="text-xs text-muted-foreground">
                      {new Date(submission.received_at).toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Configuration Instructions */}
      <Card>
        <CardHeader>
          <CardTitle>⚙️ Configuration</CardTitle>
          <CardDescription>Variables d'environnement requises</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm font-mono">
            <div className="flex justify-between">
              <span>N8N_WEBHOOK_URL</span>
              <Badge variant={process.env.N8N_WEBHOOK_URL ? 'default' : 'destructive'}>
                {process.env.N8N_WEBHOOK_URL ? '✅ Configuré' : '❌ Manquant'}
              </Badge>
            </div>
            <div className="flex justify-between">
              <span>SAPIENCE_API_TOKEN</span>
              <Badge variant={process.env.SAPIENCE_API_TOKEN ? 'default' : 'destructive'}>
                {process.env.SAPIENCE_API_TOKEN ? '✅ Configuré' : '❌ Manquant'}
              </Badge>
            </div>
            <div className="flex justify-between">
              <span>ANTHROPIC_API_KEY</span>
              <Badge variant={process.env.ANTHROPIC_API_KEY ? 'default' : 'destructive'}>
                {process.env.ANTHROPIC_API_KEY ? '✅ Configuré' : '❌ Manquant'}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}