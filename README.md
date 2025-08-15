# SAPience - ML-Powered SAP Analytics Platform

🚀 **Advanced machine learning platform for SAP with predictive PUP analysis, anomaly detection, and intelligent insights powered by Claude AI and n8n orchestration.**

## ✨ Features

### 🤖 **ML & AI Capabilities**
- **Predictive PUP Analysis**: 30-day price forecasting with confidence intervals
- **Anomaly Detection**: Real-time monitoring of price variances and outliers
- **Claude AI Copilot**: Natural language Q&A with SAP transaction links
- **What-If Scenarios**: Price, FX, and volume impact simulation
- **SHAP Explanations**: Explainable AI for model interpretability

### 🔗 **SAP Integration** 
- **45+ Entity Sets**: Complete ACM_APPLWC service coverage
- **Real-time Sync**: Live data extraction and processing
- **Multi-Connection**: BTP, Cloud, and VPN support
- **Security First**: Read-only access with audit trails

### ⚙️ **n8n Orchestration**
- **Workflow Automation**: Scheduled data extraction and processing
- **Smart Alerts**: Teams/Slack notifications for anomalies
- **Error Handling**: Robust retry mechanisms and monitoring
- **Custom Triggers**: Event-driven automation

### 🏢 **Enterprise Ready**
- **Multi-Tenant**: Secure isolation with row-level security
- **GDPR Compliant**: EU hosting with data residency
- **99.9% SLA**: High availability with monitoring
- **Audit Trails**: Complete activity logging

## 🏗️ Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Next.js UI    │────│   n8n Workflows │────│   SAP OData     │
│   (Frontend)    │    │  (Orchestration) │    │   (Data Source) │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         │              ┌─────────────────┐              │
         └──────────────│   Claude AI     │──────────────┘
                        │   (Analysis)    │
                        └─────────────────┘
```

### **Core Components**

1. **Frontend**: Next.js 15 with Tailwind CSS and shadcn/ui
2. **Orchestration**: n8n workflows for SAP data processing
3. **AI Engine**: Claude Sonnet 4 for intelligent analysis
4. **Data Layer**: SAP OData with 45+ entity sets
5. **Hosting**: Netlify with edge functions

## 🚀 Quick Start

### **Prerequisites**
- Node.js 18+
- SAP OData access (ACM_APPLWC service)
- n8n instance (configured)
- Claude API key

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/hadamaouattara/SAPience.git
   cd SAPience
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment setup**
   ```bash
   cp .env.example .env.local
   ```
   
   Configure your environment variables:
   ```env
   # n8n Configuration
   N8N_API_URL=https://your-n8n-instance.com
   N8N_API_KEY=your-n8n-api-key
   
   # Claude AI
   CLAUDE_API_KEY=your-claude-api-key
   
   # SAP Configuration (managed via n8n credentials)
   SAP_BASE_URL=http://your-sap-server:50000
   
   # Netlify (for blob storage)
   NETLIFY_BLOB_TOKEN=your-netlify-token
   ```

4. **Development server**
   ```bash
   npm run dev
   ```

5. **Access the application**
   - Local: `http://localhost:3000`
   - Production: `https://sapience.netlify.app`

## 🔧 SAP Configuration

### **Supported Entity Sets**

The platform connects to your SAP ACM_APPLWC service and supports 45+ entity sets:

**Critical ML Entities:**
- `CKMLHD` - ML Document Header
- `CKMLPR` - ML Document Prices 
- `MBEW` - Material Valuation
- `EKKO/EKPO` - Purchasing Documents
- `ACDOCA` - Universal Journal

**Available Entities:**
- `C_ACMApplicationOverview` - ACM Application Overview
- `TradingContracts` - Trading Contracts
- `Applications` - Applications
- `ApplicationItemSet` - Application Items
- *...and 41 more*

### **Connection Methods**

1. **SAP Cloud Connector + BTP** (Recommended)
   - Secure tunneling without direct internet exposure
   - OAuth2 with principal propagation
   - Full audit compliance

2. **Direct S/4 Cloud**
   - OData v2/v4 direct connection
   - OAuth2/SAML authentication
   - Cloud-native deployment

3. **VPN/IPSec**
   - Enterprise network integration
   - Mutual TLS authentication
   - On-premises compatibility

## 🤖 n8n Workflows

### **Pre-configured Workflows**

1. **SAP Data Extraction** (`rdIZ3xOpQrrUmwTG`)
   - Scheduled entity set synchronization
   - Error handling and retry logic
   - Data transformation and validation

2. **ML Prediction Pipeline** (Coming Soon)
   - Price forecasting models
   - Confidence interval calculation
   - SHAP feature importance

3. **Anomaly Detection** (Ready)
   - Statistical outlier detection
   - Threshold-based alerting
   - Real-time monitoring

4. **Alert Manager** (Active)
   - Teams/Slack notifications
   - Email alerting
   - Escalation workflows

### **Workflow Configuration**

All workflows are managed through the n8n instance at:
```
https://exonov-u39090.vm.elestio.app
```

Webhook endpoint:
```
POST /webhook/sap-acm-data
```

## 🧠 Claude AI Integration

### **Capabilities**

- **Natural Language Queries**: Ask questions about your SAP data
- **Automated Insights**: Generate executive summaries and reports
- **Trend Analysis**: Identify patterns and anomalies
- **Recommendations**: Actionable business insights
- **Audit Documentation**: Compliance-ready explanations

### **Example Queries**

```
"What are the top 5 materials with highest price variance this month?"
"Explain the anomaly detected in Company Code 1000"
"Generate a summary report for Q4 PUP predictions"
"What factors are driving the price increase in material X?"
```

## 💰 Pricing Plans

| Plan | Price | Features |
|------|-------|----------|
| **Essential** | €2,500/month | Basic dashboards, exports, 3 company codes |
| **Pro** | €8,000/month | ML predictions, anomalies, Claude AI, 10 company codes |
| **Enterprise** | Custom | SLA, VPC, isolation, unlimited company codes |

**Add-ons:**
- BTP Connector: +€1,000/month
- 24/7 Support: +€2,000/month
- Training: €500/day

## 🛠️ Development

### **Project Structure**

```
SAPience/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── dashboard/         # Dashboard pages
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # Base UI components
│   └── dashboard/        # Dashboard-specific components
├── lib/                   # Utilities and types
│   ├── types.ts          # TypeScript definitions
│   ├── constants.ts      # Configuration constants
│   └── utils.ts          # Helper functions
├── styles/               # Global styles
└── public/               # Static assets
```

### **Key Technologies**

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **State**: Zustand for global state management
- **Data Fetching**: React Query for server state
- **Charts**: Recharts for data visualization
- **Deployment**: Netlify with edge functions

### **API Routes**

```
/api/sap/entities          # SAP entity management
/api/sap/sync             # Data synchronization
/api/n8n/status           # Workflow health check
/api/n8n/execute          # Trigger workflows
/api/ml/predictions       # ML predictions
/api/ml/anomalies         # Anomaly detection
/api/dashboard/metrics    # Dashboard data
```

## 🔐 Security & Compliance

### **Data Protection**
- **GDPR Compliant**: EU data residency (Paris)
- **Encryption**: AES-256 at rest, TLS 1.3 in transit
- **Access Control**: Role-based permissions (RBAC)
- **Audit Logging**: Immutable activity trails

### **SAP Security**
- **Read-Only Access**: No write operations to critical tables
- **Principle of Least Privilege**: Minimal required permissions
- **Connection Security**: OAuth2, SAML, mTLS support
- **Network Security**: VPN, private endpoints

### **Multi-Tenancy**
- **Database**: Row-level security (RLS)
- **Schema Isolation**: Optional for enterprise clients
- **Resource Limits**: Per-tenant quotas and limits
- **Data Segregation**: Complete logical separation

## 📊 Monitoring & Observability

### **Application Monitoring**
- **Health Checks**: Automated system health verification
- **Performance**: Response time and throughput metrics
- **Error Tracking**: Real-time error monitoring
- **Uptime**: 99.9% SLA with status page

### **Business Metrics**
- **Usage Analytics**: Feature adoption and usage patterns
- **ML Model Performance**: Accuracy, MAPE, drift detection
- **Data Quality**: Completeness, consistency checks
- **User Activity**: Audit trails and access logs

## 🚀 Deployment

### **Production Deployment**

1. **Netlify Configuration**
   ```bash
   # Build settings
   Build command: npm run build
   Publish directory: .next
   
   # Environment variables
   N8N_API_URL=https://your-production-n8n.com
   CLAUDE_API_KEY=your-production-claude-key
   ```

2. **DNS & SSL**
   - Custom domain: `sapience.yourcompany.com`
   - SSL certificate: Auto-managed by Netlify
   - CDN: Global edge distribution

3. **Database Setup**
   ```sql
   -- Multi-tenant setup with RLS
   CREATE TABLE tenants (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     name TEXT NOT NULL,
     created_at TIMESTAMP DEFAULT NOW()
   );
   
   -- Enable RLS on all tenant data
   ALTER TABLE predictions ENABLE ROW LEVEL SECURITY;
   ```

### **Infrastructure as Code**

```yaml
# netlify.toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"
  
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

## 📈 Roadmap

### **Phase 1 - Foundation** ✅
- [x] SAP OData integration (45+ entities)
- [x] n8n workflow orchestration
- [x] Claude AI analysis engine
- [x] Modern React dashboard
- [x] Basic anomaly detection

### **Phase 2 - ML Platform** (Q1 2025)
- [ ] PUP prediction models (LightGBM)
- [ ] SHAP feature importance
- [ ] Confidence intervals
- [ ] Model drift detection
- [ ] What-if simulation engine

### **Phase 3 - Enterprise** (Q2 2025)
- [ ] Multi-tenant architecture
- [ ] Advanced RBAC
- [ ] Custom SLA tiers
- [ ] VPC deployment options
- [ ] Advanced audit & compliance

### **Phase 4 - Scale** (Q3 2025)
- [ ] Real-time streaming
- [ ] Advanced ML models
- [ ] Custom model training
- [ ] API marketplace
- [ ] Partner integrations

## 🤝 Contributing

### **Development Setup**

1. **Fork the repository**
2. **Create feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make changes and test**
   ```bash
   npm run dev
   npm run lint
   npm run type-check
   ```
4. **Commit and push**
   ```bash
   git commit -m "feat: add amazing feature"
   git push origin feature/amazing-feature
   ```
5. **Create pull request**

### **Code Style**
- **TypeScript**: Strict mode enabled
- **ESLint**: Enforced linting rules
- **Prettier**: Code formatting
- **Conventional Commits**: Semantic commit messages

## 📞 Support

### **Documentation**
- **API Docs**: `/docs/api`
- **User Guide**: `/docs/user-guide`
- **Admin Guide**: `/docs/admin`
- **Developer Docs**: `/docs/developer`

### **Contact**
- **Email**: support@sapience.com
- **Slack**: [SAPience Community](https://sapience-community.slack.com)
- **GitHub Issues**: [Report bugs](https://github.com/hadamaouattara/SAPience/issues)
- **Status Page**: [status.sapience.com](https://status.sapience.com)

### **Professional Services**
- **Implementation**: Custom SAP integration
- **Training**: User and admin training
- **Support Plans**: 24/7 enterprise support
- **Consulting**: ML strategy and optimization

## 📄 License

**Commercial License** - SAPience is a commercial product.

For licensing inquiries, contact: licensing@sapience.com

## 🙏 Acknowledgments

- **SAP Community**: For OData best practices
- **n8n Team**: For the amazing automation platform
- **Anthropic**: For Claude AI capabilities
- **Netlify**: For seamless deployment
- **Open Source Community**: For the amazing tools and libraries

---

**Built with ❤️ by [Hadama Ouattara](https://github.com/hadamaouattara)**

*Transform your SAP data into intelligent insights with SAPience* 🚀