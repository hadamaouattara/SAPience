import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { format, formatDistanceToNow } from 'date-fns';

// Utility function for merging Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Date formatting utilities
export function formatDate(date: string | Date, formatStr = 'MMM dd, yyyy') {
  return format(new Date(date), formatStr);
}

export function formatRelativeTime(date: string | Date) {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}

// Number formatting utilities
export function formatCurrency(amount: number, currency = 'EUR') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}

export function formatPercentage(value: number, decimals = 2) {
  return `${(value * 100).toFixed(decimals)}%`;
}

export function formatNumber(value: number, decimals = 2) {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

// API utilities
export async function fetchWithAuth(url: string, options: RequestInit = {}) {
  const defaultHeaders = {
    'Content-Type': 'application/json',
  };

  const config: RequestInit = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  const response = await fetch(url, config);
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  return response.json();
}

// N8N Integration utilities
export function buildN8NWebhookURL(path: string, baseUrl?: string) {
  const base = baseUrl || process.env.N8N_API_URL || 'https://exonov-u39090.vm.elestio.app';
  return `${base}/webhook/${path}`;
}

export function buildN8NApiURL(endpoint: string, baseUrl?: string) {
  const base = baseUrl || process.env.N8N_API_URL || 'https://exonov-u39090.vm.elestio.app';
  return `${base}/api/v1/${endpoint}`;
}

// SAP data processing utilities
export function processSAPEntitySets(rawData: any) {
  if (!rawData?.d?.EntitySets) {
    return [];
  }
  
  return rawData.d.EntitySets.map((entitySet: string, index: number) => ({
    id: index.toString(),
    name: entitySet,
    description: getSAPEntityDescription(entitySet),
    searchable: isSearchableEntity(entitySet),
    writable: isWritableEntity(entitySet),
    lastSync: new Date().toISOString()
  }));
}

function getSAPEntityDescription(entitySet: string): string {
  const descriptions: Record<string, string> = {
    'C_ACMApplicationOverview': 'ACM Application Overview',
    'TradingContracts': 'Trading Contracts',
    'Applications': 'Applications',
    'CKMLHD': 'ML Document Header',
    'CKMLPR': 'ML Document Prices',
    'MBEW': 'Material Valuation',
    'EKKO': 'Purchasing Document Header',
    'EKPO': 'Purchasing Document Item'
  };
  
  return descriptions[entitySet] || entitySet;
}

function isSearchableEntity(entitySet: string): boolean {
  const searchableEntities = [
    'C_ACMApplicationOverview',
    'TradingContracts', 
    'Applications',
    'CKMLHD',
    'MBEW'
  ];
  
  return searchableEntities.includes(entitySet);
}

function isWritableEntity(entitySet: string): boolean {
  // Most SAP entities are read-only for security
  const writableEntities: string[] = [];
  
  return writableEntities.includes(entitySet);
}

// ML utilities
export function calculateConfidenceInterval(prediction: number, std: number, confidence = 0.95) {
  const z = confidence === 0.95 ? 1.96 : confidence === 0.99 ? 2.576 : 1.645;
  const margin = z * std;
  
  return {
    lower: prediction - margin,
    upper: prediction + margin,
    margin
  };
}

export function calculateMAPE(actual: number[], predicted: number[]): number {
  if (actual.length !== predicted.length || actual.length === 0) {
    return 0;
  }
  
  const ape = actual.map((a, i) => Math.abs((a - predicted[i]) / a));
  return ape.reduce((sum, error) => sum + error, 0) / ape.length;
}

export function getAnomalyColor(severity: 'low' | 'medium' | 'high' | 'critical') {
  const colors = {
    low: 'bg-blue-100 text-blue-800',
    medium: 'bg-yellow-100 text-yellow-800', 
    high: 'bg-orange-100 text-orange-800',
    critical: 'bg-red-100 text-red-800'
  };
  
  return colors[severity];
}

// Validation utilities
export function validateSAPConfig(config: any): string[] {
  const errors: string[] = [];
  
  if (!config.baseUrl) {
    errors.push('Base URL is required');
  }
  
  if (!config.connectionType) {
    errors.push('Connection type is required');
  }
  
  if (!config.companyCodes || config.companyCodes.length === 0) {
    errors.push('At least one company code is required');
  }
  
  return errors;
}

// Error handling utilities
export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  
  if (typeof error === 'string') {
    return error;
  }
  
  return 'An unknown error occurred';
}

export function createAPIError(message: string, status = 500) {
  const error = new Error(message) as Error & { status: number };
  error.status = status;
  return error;
}

// Local storage utilities (browser only)
export function getFromStorage(key: string, defaultValue: any = null) {
  if (typeof window === 'undefined') return defaultValue;
  
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch {
    return defaultValue;
  }
}

export function setToStorage(key: string, value: any) {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Ignore storage errors
  }
}

export function removeFromStorage(key: string) {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.removeItem(key);
  } catch {
    // Ignore storage errors
  }
}