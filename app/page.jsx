'use client';

import React from 'react';
import Link from 'next/link';
import { Brain, Database, Bot, TrendingUp, Shield, Zap, ArrowRight, CheckCircle, Target, Users, Globe } from 'lucide-react';

export default function HomePage() {
  const features = [
    {
      icon: Brain,
      title: "Dual AI Analysis",
      description: "Gemini Business + ChatGPT Technical analysis for comprehensive SAP insights",
      color: "blue"
    },
    {
      icon: Database,
      title: "SAP Integration",
      description: "Direct OData connection to SAP ACM with ML-ready collection assessment",
      color: "green"
    },
    {
      icon: Bot,
      title: "n8n Orchestration",
      description: "Automated workflows for monthly close forecasts and anomaly detection",
      color: "purple"
    },
    {
      icon: TrendingUp,
      title: "PUP Prediction",
      description: "15-25% reduction in forecast errors with advanced ML models",
      color: "orange"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "EU-hosted, RGPD compliant with SOX-ready audit trails",
      color: "red"
    },
    {
      icon: Zap,
      title: "Real-time Analytics",
      description: "Live dashboards with MAPE monitoring and confidence intervals",
      color: "yellow"
    }
  ];

  const pricingTiers = [
    {
      name: "Essential",
      price: "€2-5k",
      period: "/month",
      description: "Perfect for teams getting started with ML-powered SAP analytics",
      features: [
        "Multi-entity dashboards",
        "Basic exports & reports",
        "Email alerts",
        "Standard support",
        "Up to 5 Company Codes"
      ],
      color: "border-blue-200 bg-blue-50"
    },
    {
      name: "Pro",
      price: "€6-12k",
      period: "/month",
      description: "Advanced ML capabilities for enterprise operations",
      features: [
        "PUP prediction + Confidence Intervals",
        "Smart n8n alerts & automation",
        "What-if scenario analysis",
        "Claude AI Copilot",
        "Advanced ML models",
        "Unlimited Company Codes"
      ],
      color: "border-green-200 bg-green-50",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Full-scale deployment with dedicated infrastructure",
      features: [
        "Everything in Pro",
        "Dedicated VPC deployment",
        "Schema-per-tenant isolation",
        "24/7 premium support",
        "Custom integrations",
        "On-premise options"
      ],
      color: "border-purple-200 bg-purple-50"
    }
  ];

  const stats = [
    { number: "97.9%", label: "Success Rate", description: "Workflow execution reliability" },
    { number: "4.2%", label: "MAPE Score", description: "Prediction accuracy" },
    { number: "23%", label: "Error Reduction", description: "Forecast improvement" },
    { number: "12.5s", label: "Avg Processing", description: "Analysis speed" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">SAPience</span>
              <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">ML Platform v2.0</span>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/dashboard" className="text-gray-700 hover:text-blue-600 transition-colors">
                Dashboard
              </Link>
              <Link href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">
                Pricing
              </Link>
              <Link 
                href="/dashboard" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
              >
                <span>Launch Platform</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              ML-Powered SAP Analytics
              <span className="block text-blue-600">for Finance & Supply Chain</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your SAP data into predictive insights with dual AI analysis, 
              automated workflows, and enterprise-grade ML models. Reduce forecast errors by 15-25%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/dashboard"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <span>Try Live Demo</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Watch Demo Video
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Enterprise ML Platform for SAP
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built specifically for Finance/CO and Supply Chain teams who need accurate forecasts, 
              anomaly detection, and actionable insights from their SAP data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const colorClasses = {
                blue: "text-blue-600 bg-blue-100",
                green: "text-green-600 bg-green-100",
                purple: "text-purple-600 bg-purple-100",
                orange: "text-orange-600 bg-orange-100",
                red: "text-red-600 bg-red-100",
                yellow: "text-yellow-600 bg-yellow-100"
              };

              return (
                <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                  <div className={`w-12 h-12 rounded-lg ${colorClasses[feature.color]} flex items-center justify-center mb-6`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How SAPience Works</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Your SAP data flows through our intelligent pipeline to deliver actionable ML insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Database className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">1. SAP Data Ingestion</h3>
              <p className="opacity-90">
                Secure OData connection to your SAP system. ML assessment of collections 
                for predictability and forecast potential.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Bot className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">2. Dual AI Analysis</h3>
              <p className="opacity-90">
                Gemini provides business insights while ChatGPT handles technical architecture. 
                Combined confidence scoring ensures reliability.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">3. Actionable Insights</h3>
              <p className="opacity-90">
                Real-time dashboards, predictive alerts, and what-if scenarios. 
                n8n automation for monthly close and anomaly detection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your SAPience Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible pricing tiers designed for teams of all sizes. 
              ROI typically achieved within 3-6 months through improved forecast accuracy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div 
                key={index} 
                className={`relative p-8 rounded-xl border-2 ${tier.color} ${tier.popular ? 'scale-105 shadow-xl' : 'shadow-sm'}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                    <span className="text-gray-600">{tier.period}</span>
                  </div>
                  <p className="text-gray-600">{tier.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  tier.popular 
                    ? 'bg-green-600 hover:bg-green-700 text-white' 
                    : 'bg-gray-900 hover:bg-gray-800 text-white'
                }`}>
                  {tier.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your SAP Analytics?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join leading Finance and Supply Chain teams who've reduced forecast errors by 15-25% 
            with SAPience ML Platform. Your data. Your insights. Your competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/dashboard"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <span>Launch Dashboard</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="border border-gray-600 hover:border-gray-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="w-6 h-6 text-blue-400" />
                <span className="text-xl font-bold">SAPience</span>
              </div>
              <p className="text-gray-400">
                ML-powered SAP analytics platform for enterprise Finance and Supply Chain teams.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">API Docs</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Integrations</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Privacy</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Terms</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Security</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 SAPience ML Platform. All rights reserved. Hosted in EU-West-3 (Paris) - RGPD Compliant</p>
          </div>
        </div>
      </footer>
    </div>
  );
}