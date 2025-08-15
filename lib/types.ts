// Core Types for SAPience ML Platform

export interface Tenant {
  id: string;
  name: string;
  sapConfig: SAPConfig;
  subscription: 'essential' | 'pro' | 'enterprise';
  createdAt: string;
  settings: TenantSettings;
}

export interface SAPConfig {
  connectionType: 'btp' | 'cloud' | 'vpn';
  baseUrl: string;
  clientId?: string;
  companyCodes: string[];
  plants: string[];
  credentials: {
    username?: string;
    certificateId?: string;
    oauth2Config?: OAuth2Config;
  };
}

export interface OAuth2Config {
  tokenUrl: string;
  clientId: string;
  scopes: string[];
}

export interface TenantSettings {
  timezone: string;
  currency: string;
  language: string;
  notifications: NotificationSettings;
  mlSettings: MLSettings;
}

export interface NotificationSettings {
  email: boolean;
  teams: boolean;
  slack: boolean;
  thresholds: {
    anomalyScore: number;
    priceVariance: number;
  };
}

export interface MLSettings {
  pupPrediction: {
    enabled: boolean;
    horizonDays: number;
    confidenceInterval: number;
    updateFrequency: 'daily' | 'weekly' | 'monthly';
  };
  anomalyDetection: {
    enabled: boolean;
    sensitivity: 'low' | 'medium' | 'high';
    excludeWeekends: boolean;
  };
}

// SAP Data Types
export interface SAPEntitySet {
  name: string;
  description: string;
  searchable: boolean;
  writable: boolean;
  lastSync?: string;
}

export interface MaterialData {
  materialId: string;
  companyCode: string;
  plant: string;
  valuationClass: string;
  currentPrice: number;
  predictedPrice?: number;
  priceVariance?: number;
  lastUpdated: string;
}

export interface PUPPrediction {
  materialId: string;
  companyCode: string;
  plant: string;
  period: string;
  predictedPrice: number;
  confidence: number;
  upperBound: number;
  lowerBound: number;
  drivers: PriceDriver[];
  createdAt: string;
}

export interface PriceDriver {
  factor: string;
  impact: number;
  description: string;
}

export interface Anomaly {
  id: string;
  type: 'price' | 'volume' | 'variance';
  materialId: string;
  companyCode: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  score: number;
  description: string;
  detectedAt: string;
  resolved: boolean;
  metadata: Record<string, any>;
}

// N8N Integration Types
export interface N8NWorkflow {
  id: string;
  name: string;
  active: boolean;
  lastExecution?: string;
  executionCount: number;
  status: 'success' | 'error' | 'running' | 'waiting';
}

export interface N8NExecution {
  id: string;
  workflowId: string;
  status: 'success' | 'error' | 'running';
  startedAt: string;
  finishedAt?: string;
  data?: any;
  error?: string;
}

// Dashboard Types
export interface DashboardMetrics {
  totalMaterials: number;
  activePredictions: number;
  anomaliesDetected: number;
  accuracyRate: number;
  lastSync: string;
  trends: {
    priceVariance: number;
    predictionAccuracy: number;
    anomalyRate: number;
  };
}

export interface ChartData {
  name: string;
  value: number;
  date?: string;
  category?: string;
}

// API Response Types
export interface APIResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  timestamp: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

// What-If Simulation Types
export interface WhatIfScenario {
  id: string;
  name: string;
  parameters: {
    priceChange?: number;
    fxChange?: number;
    volumeChange?: number;
    leadTimeChange?: number;
  };
  results?: {
    impactedMaterials: number;
    totalImpact: number;
    recommendations: string[];
  };
  createdAt: string;
}

// Audit Trail Types
export interface AuditEvent {
  id: string;
  tenantId: string;
  userId: string;
  action: string;
  resource: string;
  resourceId?: string;
  details: Record<string, any>;
  timestamp: string;
  ipAddress: string;
  userAgent: string;
}