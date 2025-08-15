'use client';

import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import { TrendingUp, Database, Brain, AlertTriangle, Zap, Euro, Settings, Play, Pause, Activity, Target, Users, Globe, CheckCircle, XCircle, Clock, Cpu, Network, Bot } from 'lucide-react';

export default function SapienceDashboard() {
  const [workflowStatus, setWorkflowStatus] = useState('active');
  const [sapConnectionStatus, setSapConnectionStatus] = useState('connected');
  const [aiAnalysisRunning, setAiAnalysisRunning] = useState(false);
  const [lastExecution, setLastExecution] = useState('2025-08-15T11:21:08Z');
  const [mlReadinessScore, setMlReadinessScore] = useState(0.75);
  const [activeTab, setActiveTab] = useState('overview');
  
  // Real-time data from your n8n workflow
  const [realTimeMetrics, setRealTimeMetrics] = useState({
    totalCollections: 15,
    mlReadyCollections: 11,
    searchableCollections: 13,
    writableCollections: 8,
    successfulExecutions: 47,
    errorRate: 2.1,
    avgProcessingTime: 12.5,
    lastProcessingId: 'sapience-1723674068299'
  });
  
  // Webhook endpoint for your n8n workflow
  const webhookUrl = 'https://exonov-u39090.vm.elestio.app/webhook/sapience-acm-enhanced';
  
  // Data based on your workflow structure
  const mlReadinessData = [
    { name: 'Contract Collections', readiness: 85, potential: 92 },
    { name: 'Value Collections', readiness: 78, potential: 88 },
    { name: 'Amount Collections', readiness: 82, potential: 95 },
    { name: 'Standard Collections', readiness: 45, potential: 65 },
    { name: 'Archive Collections', readiness: 25, potential: 40 }
  ];
  
  const executionHistory = [
    { time: '09:00', business: 85, technical: 88, combined: 86.5 },
    { time: '10:00', business: 82, technical: 90, combined: 86 },
    { time: '11:00', business: 89, technical: 87, combined: 88 },
    { time: '12:00', business: 85, technical: 89, combined: 87 },
    { time: '13:00', business: 91, technical: 85, combined: 88 },
    { time: '14:00', business: 88, technical: 92, combined: 90 }
  ];
  
  const aiConfidenceData = [
    { name: 'Gemini Business', confidence: 85, analyses: 23 },
    { name: 'ChatGPT Technical', confidence: 88, analyses: 23 },
    { name: 'Combined Consensus', confidence: 90, analyses: 23 }
  ];
  
  const pricingTierData = [
    { name: 'Essential (€2-5k)', value: 35, color: '#3B82F6' },
    { name: 'Pro (€6-12k)', value: 50, color: '#10B981' },
    { name: 'Enterprise (Custom)', value: 15, color: '#F59E0B' }
  ];

  // Trigger your n8n workflow
  const triggerWorkflow = async () => {
    setAiAnalysisRunning(true);
    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          trigger: 'manual',
          source: 'sapience-dashboard',
          timestamp: new Date().toISOString(),
          user: 'dashboard-user'
        })
      });
      
      if (response.ok) {
        const result = await response.json();
        console.log('Workflow triggered successfully:', result);
        setLastExecution(new Date().toISOString());
      }
    } catch (error) {
      console.error('Error triggering workflow:', error);
    } finally {
      setTimeout(() => setAiAnalysisRunning(false), 3000);
    }
  };

  const StatusBadge = ({ status, label }) => {
    const statusConfig = {
      active: { color: 'bg-green-500', icon: CheckCircle },
      connected: { color: 'bg-green-500', icon: CheckCircle },
      error: { color: 'bg-red-500', icon: XCircle },
      warning: { color: 'bg-yellow-500', icon: AlertTriangle }
    };
    
    const config = statusConfig[status] || statusConfig.error;
    const Icon = config.icon;
    
    return (
      <div className="flex items-center space-x-2">
        <div className={`w-2 h-2 rounded-full ${config.color}`}></div>
        <Icon className="w-4 h-4 text-gray-400" />
        <span className="text-sm text-gray-600">{label}</span>
      </div>
    );
  };

  const MetricCard = ({ title, value, subtitle, icon: Icon, trend, color = "blue" }) => {
    const colorClasses = {
      blue: "border-blue-200 bg-blue-50",
      green: "border-green-200 bg-green-50",
      purple: "border-purple-200 bg-purple-50",
      orange: "border-orange-200 bg-orange-50"
    };

    return (
      <div className={`p-6 rounded-xl border-2 ${colorClasses[color]} backdrop-blur-sm`}>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
            {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
          </div>
          <div className={`p-3 rounded-lg bg-${color}-100`}>
            <Icon className={`w-6 h-6 text-${color}-600`} />
          </div>
        </div>
        {trend && (
          <div className="mt-4 flex items-center">
            <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-sm text-green-600">{trend}</span>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Brain className="w-8 h-8 text-blue-600" />
                <h1 className="text-2xl font-bold text-gray-900">SAPience ML Platform</h1>
              </div>
              <div className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                v2.0 Enterprise
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <StatusBadge status={workflowStatus} label="n8n Workflow" />
              <StatusBadge status={sapConnectionStatus} label="SAP Connection" />
              <button
                onClick={triggerWorkflow}
                disabled={aiAnalysisRunning}
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors disabled:opacity-50"
              >
                {aiAnalysisRunning ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Analyzing...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    <span>Run Analysis</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {['overview', 'ml-analytics', 'workflows', 'settings'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.replace('-', ' ')}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <MetricCard
                title="ML Ready Collections"
                value={realTimeMetrics.mlReadyCollections}
                subtitle={`of ${realTimeMetrics.totalCollections} total`}
                icon={Database}
                trend="+15% this month"
                color="blue"
              />
              <MetricCard
                title="AI Confidence Score"
                value="88%"
                subtitle="Dual AI Analysis"
                icon={Bot}
                trend="+5% improvement"
                color="green"
              />
              <MetricCard
                title="Processing Time"
                value={`${realTimeMetrics.avgProcessingTime}s`}
                subtitle="Average execution"
                icon={Clock}
                trend="-20% faster"
                color="purple"
              />
              <MetricCard
                title="Success Rate"
                value="97.9%"
                subtitle={`${realTimeMetrics.errorRate}% error rate`}
                icon={Target}
                trend="99.5% uptime"
                color="orange"
              />
            </div>

            {/* Main Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* ML Readiness Chart */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">ML Readiness by Collection Type</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={mlReadinessData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="readiness" fill="#3B82F6" />
                    <Bar dataKey="potential" fill="#10B981" opacity={0.7} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* AI Analysis Performance */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Dual AI Analysis Performance</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={executionHistory}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="business" stackId="1" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.6} />
                    <Area type="monotone" dataKey="technical" stackId="1" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Workflow Status and Pricing */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Workflow Execution Status */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Latest Execution</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Processing ID</span>
                    <span className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">
                      {realTimeMetrics.lastProcessingId}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Last Run</span>
                    <span className="text-sm text-gray-900">
                      {new Date(lastExecution).toLocaleTimeString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Success Rate</span>
                    <span className="text-sm text-green-600 font-medium">97.9%</span>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Gemini Business</span>
                      <span className="text-sm font-medium">85% confidence</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">ChatGPT Technical</span>
                      <span className="text-sm font-medium">88% confidence</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing Distribution */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Client Tier Distribution</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={pricingTierData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="value"
                      label={({ name, value }) => `${value}%`}
                    >
                      {pricingTierData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Quick Actions */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button 
                    onClick={triggerWorkflow}
                    className="w-full text-left p-3 rounded-lg hover:bg-blue-50 border border-blue-200 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <Play className="w-5 h-5 text-blue-600" />
                      <div>
                        <div className="font-medium text-gray-900">Trigger SAP Analysis</div>
                        <div className="text-sm text-gray-600">Run dual AI analysis on SAP data</div>
                      </div>
                    </div>
                  </button>
                  
                  <button className="w-full text-left p-3 rounded-lg hover:bg-green-50 border border-green-200 transition-colors">
                    <div className="flex items-center space-x-3">
                      <Database className="w-5 h-5 text-green-600" />
                      <div>
                        <div className="font-medium text-gray-900">View SAP Collections</div>
                        <div className="text-sm text-gray-600">Browse ML-ready data collections</div>
                      </div>
                    </div>
                  </button>
                  
                  <button className="w-full text-left p-3 rounded-lg hover:bg-purple-50 border border-purple-200 transition-colors">
                    <div className="flex items-center space-x-3">
                      <Settings className="w-5 h-5 text-purple-600" />
                      <div>
                        <div className="font-medium text-gray-900">Configure Workflows</div>
                        <div className="text-sm text-gray-600">Manage n8n automation rules</div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'ml-analytics' && (
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">ML Analytics & Predictions</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">PUP Prediction Accuracy</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>MAPE Score</span>
                    <span className="font-bold text-green-600">4.2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Forecast Confidence</span>
                    <span className="font-bold text-blue-600">92%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Anomaly Detection Rate</span>
                    <span className="font-bold text-purple-600">96%</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Business Impact</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Forecast Error Reduction</span>
                    <span className="font-bold text-green-600">-23%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Process Automation</span>
                    <span className="font-bold text-blue-600">78%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>ROI Improvement</span>
                    <span className="font-bold text-purple-600">+18%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'workflows' && (
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">n8n Workflow Management</h2>
            <div className="space-y-6">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">SAPience Enhanced - Complete ML Workflow</h3>
                <p className="text-gray-600 mb-4">Dual AI analysis with Gemini (Business) + ChatGPT (Technical)</p>
                <div className="flex items-center space-x-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Active</span>
                  <span className="text-sm text-gray-600">Last execution: {new Date(lastExecution).toLocaleString()}</span>
                  <button 
                    onClick={triggerWorkflow}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    Execute Now
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">9</div>
                  <div className="text-sm text-gray-600">Total Nodes</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-green-600">47</div>
                  <div className="text-sm text-gray-600">Successful Runs</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">12.5s</div>
                  <div className="text-sm text-gray-600">Avg Duration</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Platform Settings</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-4">SAP Connection</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">OData Endpoint</label>
                    <input 
                      type="text" 
                      value="http://202.153.35.211:50000/sap/opu/odata/sap/ACM_APPLWC/C_ACMApplicationOverview"
                      className="w-full p-2 border border-gray-300 rounded"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Connection Status</label>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-green-600">Connected</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">AI Configuration</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Gemini Model</label>
                    <select className="w-full p-2 border border-gray-300 rounded">
                      <option>Gemini-1.5-Pro (Business Analysis)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">ChatGPT Model</label>
                    <select className="w-full p-2 border border-gray-300 rounded">
                      <option>GPT-4o (Technical Analysis)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}