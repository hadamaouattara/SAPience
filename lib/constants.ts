// SAPience Platform Constants

// N8N Configuration
export const N8N_CONFIG = {
  BASE_URL: process.env.N8N_API_URL || 'https://exonov-u39090.vm.elestio.app',
  WEBHOOK_PATH: '/webhook/sap-acm-data',
  WORKFLOWS: {
    SAP_EXTRACTION: 'rdIZ3xOpQrrUmwTG',
    ML_PREDICTION: 'ml-prediction-workflow',
    ANOMALY_DETECTION: 'anomaly-detection-workflow',
    ALERT_MANAGER: 'alert-manager-workflow'
  }
} as const;

// SAP Entity Sets (Critical for ML)
export const SAP_ENTITIES = {
  // Financial & Costing
  ACDOCA: 'Universal Journal Entry Line Items',
  CKMLHD: 'ML Document Header',
  CKMLPR: 'ML Document Prices',
  CKMLCR: 'ML Document Credit/Debit',
  MBEW: 'Material Valuation',
  
  // Purchasing
  EKKO: 'Purchasing Document Header',
  EKPO: 'Purchasing Document Item',
  
  // Available from current workflow
  C_ACMApplicationOverview: 'ACM Application Overview',
  TradingContracts: 'Trading Contracts',
  Applications: 'Applications',
  ApplicationItemSet: 'Application Items',
  ApplicationQuantitiesSet: 'Application Quantities'
} as const;

// Subscription Plans
export const SUBSCRIPTION_PLANS = {
  essential: {
    name: 'Essential',
    price: 2500, // €2.5k/month
    features: [
      'Basic Dashboards',
      'Data Export',
      'Basic Analytics',
      'Email Support'
    ],
    limits: {
      companyCodes: 3,
      materials: 1000,
      predictions: 100
    }
  },
  pro: {
    name: 'Pro',
    price: 8000, // €8k/month
    features: [
      'All Essential Features',
      'ML Predictions',
      'Anomaly Detection',
      'What-If Scenarios',
      'n8n Orchestration',
      'Claude AI Insights',
      'Teams Integration'
    ],
    limits: {
      companyCodes: 10,
      materials: 10000,
      predictions: 1000
    }
  },
  enterprise: {
    name: 'Enterprise',
    price: null, // Custom pricing
    features: [
      'All Pro Features',
      'Custom SLA',
      'VPC Deployment',
      'Schema Isolation',
      '24/7 Support',
      'Custom Integrations',
      'Dedicated Success Manager'
    ],
    limits: {
      companyCodes: -1, // Unlimited
      materials: -1,
      predictions: -1
    }
  }
} as const;

// ML Model Configuration
export const ML_CONFIG = {
  PREDICTION_HORIZON_DAYS: 30,
  CONFIDENCE_INTERVAL: 0.95,
  ANOMALY_THRESHOLD: 2.5, // Standard deviations
  MINIMUM_HISTORY_DAYS: 90,
  UPDATE_FREQUENCIES: ['daily', 'weekly', 'monthly'] as const,
  SENSITIVITY_LEVELS: ['low', 'medium', 'high'] as const
};

// Chart Colors (Professional palette)
export const CHART_COLORS = {
  primary: '#0ea5e9',
  secondary: '#8b5cf6',
  accent: '#f59e0b',
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#06b6d4',
  gradient: {
    blue: ['#0ea5e9', '#3b82f6'],
    purple: ['#8b5cf6', '#a855f7'],
    green: ['#10b981', '#059669']
  }
};

// API Endpoints
export const API_ENDPOINTS = {
  // SAP Data
  SAP_ENTITIES: '/api/sap/entities',
  SAP_SYNC: '/api/sap/sync',
  
  // ML & Predictions
  PREDICTIONS: '/api/ml/predictions',
  ANOMALIES: '/api/ml/anomalies',
  WHATIF: '/api/ml/whatif',
  
  // N8N Integration
  N8N_WORKFLOWS: '/api/n8n/workflows',
  N8N_EXECUTE: '/api/n8n/execute',
  N8N_STATUS: '/api/n8n/status',
  
  // Dashboard
  DASHBOARD_METRICS: '/api/dashboard/metrics',
  DASHBOARD_CHARTS: '/api/dashboard/charts',
  
  // Tenant Management
  TENANTS: '/api/tenants',
  TENANT_SETTINGS: '/api/tenant/settings'
} as const;

// Environment Variables
export const ENV = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  N8N_API_URL: process.env.N8N_API_URL,
  N8N_API_KEY: process.env.N8N_API_KEY,
  CLAUDE_API_KEY: process.env.CLAUDE_API_KEY,
  DATABASE_URL: process.env.DATABASE_URL,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  NETLIFY_BLOB_TOKEN: process.env.NETLIFY_BLOB_TOKEN
} as const;

// Navigation Menu Items
export const NAVIGATION = {
  main: [
    { name: 'Dashboard', href: '/dashboard', icon: 'BarChart3' },
    { name: 'Predictions', href: '/predictions', icon: 'TrendingUp' },
    { name: 'Anomalies', href: '/anomalies', icon: 'AlertTriangle' },
    { name: 'What-If', href: '/whatif', icon: 'Calculator' },
    { name: 'Workflows', href: '/workflows', icon: 'Workflow' },
    { name: 'Settings', href: '/settings', icon: 'Settings' }
  ],
  admin: [
    { name: 'Tenants', href: '/admin/tenants', icon: 'Building' },
    { name: 'System Health', href: '/admin/health', icon: 'Activity' },
    { name: 'Audit Logs', href: '/admin/audit', icon: 'FileText' }
  ]
} as const;