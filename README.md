# 🚀 SAPience ML Platform

**Transform Your SAP with AI-Powered Analytics & PUP Prediction**

SAPience ML Platform est une solution SaaS innovante qui révolutionne l'analyse des données SAP grâce à l'intelligence artificielle. Optimisez vos processus Finance/CO et Supply Chain avec des prédictions ML précises, une détection d'anomalies intelligente et des analyses what-if avancées.

![SAPience Platform](https://img.shields.io/badge/Version-2.0-blue?style=for-the-badge)
![SAP Integration](https://img.shields.io/badge/SAP-S%2F4HANA%20Ready-green?style=for-the-badge)
![ML Powered](https://img.shields.io/badge/ML-Powered-orange?style=for-the-badge)
![EU Hosting](https://img.shields.io/badge/EU-RGPD%20Compliant-red?style=for-the-badge)

## ✨ Killer Features

### 🏢 **Dashboard Multi-Entités**
- Visualisation temps réel des KPIs par Company Code, Plant et période
- Drill-down interactif avec React + D3.js + WebSockets
- Dashboards exécutifs personnalisables

### 🤖 **PUP Prédictif + IC** 
- Modèles ML (LightGBM/XGBoost) pour prédire les PUP avant CKMLCP
- Intervalles de confiance et MAPE < 5% garanti
- Explainability avec SHAP (XAI)

### ⚡ **Alertes Smart n8n**
- Notifications intelligentes sur écarts matériels
- Intégration Teams/Slack/Email automatisée
- Workflows n8n pré-configurés

### 🔍 **What-If Analysis**
- Simulations de scénarios (prix achat, FX, scrap, délais)
- Recommandations prescriptives avec OR-Tools
- Analyse d'impact P&L en temps réel

### 🧠 **Claude Copilot**
- Assistant IA conversationnel intégré
- RAG + chiffrage injecté pour analyses précises
- Génération de rapports auditables

### 🔒 **Sécurité Entreprise**
- Chiffrement bout-en-bout, audit trails SOX
- RGPD compliant avec hébergement EU-West-3
- Row-Level Security multi-tenant

## 🏗️ Architecture Technique

### **Stack Moderne**
- **Frontend**: Next.js + Tailwind CSS + shadcn/ui
- **Backend**: FastAPI + Python ML stack
- **Database**: PostgreSQL + TimescaleDB + Redis
- **ML**: LightGBM/XGBoost + Prophet + SHAP
- **Orchestration**: n8n workflows
- **Infrastructure**: Kubernetes + EU-West-3 (Paris)

### **Intégrations SAP**
- **S/4HANA On-Premise**: SAP Cloud Connector + BTP Destination Service
- **S/4HANA Cloud/RISE**: OData direct + OAuth/SCP
- **Fallback**: VPN/IPSec + Reverse proxy Mutual TLS

### **Objets SAP Supportés**
- ACDOCA, MLDOC/MLDOC_EXTRACT
- CKMLHD/CKMLPR/CKMLCR
- MBEW/MBEW_MLD
- EKKO/EKPO, MSEG/BKPF
- Tables FX et valorisation

## 📊 KPIs & Métriques

| Métrique | Valeur | Description |
|----------|--------|-------------|
| **ROI Garanti** | 15-25% | Réduction erreurs forecast |
| **MAPE Target** | < 5% | Précision PUP garantie |
| **Implémentation** | 0-90j | De setup à production |
| **SLA Uptime** | 99.9% | Fiabilité niveau entreprise |
| **Clients** | 50+ | Entreprises utilisatrices |
| **Satisfaction** | 4.9/5 | Note moyenne clients |

## 💰 Pricing Transparent

### **Essential** (€2-5k/mois/tenant)
- Dashboards multi-entités
- KPIs temps réel
- Exports Excel/PDF
- Connecteur SAP (OData)
- Support email

### **Pro** (€6-12k/mois/tenant) 🌟
- Tout d'Essential +
- Prédictions PUP + IC
- Alertes smart n8n
- What-if analysis
- Claude Copilot
- ML avancé (SHAP)
- Support 24/7

### **Enterprise** (Sur devis)
- Tout de Pro +
- Multi-tenant avancé
- Schema-per-tenant
- VPC peering
- SSO/SAML entreprise
- Déploiement dédié

## 🚀 Démarrage Rapide

### Prérequis
- Node.js 18+
- SAP S/4HANA (On-Premise ou Cloud)
- Accès OData aux modules FI/CO

### Installation

```bash
# Clone du repository
git clone https://github.com/hadamaouattara/SAPience.git
cd SAPience

# Installation des dépendances
npm install

# Configuration environnement
cp .env.example .env.local
# Éditer .env.local avec vos paramètres SAP

# Démarrage développement
npm run dev
```

### Configuration SAP

1. **BTP Destination Service** (Recommandé)
   ```javascript
   // Configuration BTP
   {
     "name": "sapience-odata",
     "url": "https://your-s4hana.com:44300",
     "authentication": "OAuth2SAMLBearerAssertion",
     "principalPropagation": true
   }
   ```

2. **Workflows n8n**
   - Importer les workflows depuis `/workflows/`
   - Configurer les credentials SAP
   - Activer les triggers automatiques

## 🔧 Workflows n8n Inclus

### **Monthly Close Forecast**
- Extraction CDS → Feature Store → ML Predict → Push KPIs
- Trigger: Cron fin de mois
- Notifications: Teams + Email contrôleurs

### **Anomaly Watch** 
- Détection quotidienne outliers → Notifications → Tickets Jira
- Trigger: Quotidien 06:00
- Seuils configurables par Company Code

### **What-if Batch**
- Simulations scénarios standard (±3% prix, ±5% FX)
- Trigger: Hebdomadaire
- Rapports impact P&L automatiques

### **PUP Prediction Pipeline**
- Entraînement modèles ML → Validation → Déploiement
- Monitoring drift detection
- Trigger: On-demand

## 🧠 Claude MCP Integration

### **Servers MCP Disponibles**
- **GitHub-MCP**: Gestion PRs, releases, notebooks
- **n8n-MCP**: Triggers workflows, lecture logs
- **SAP-MCP**: Requêtes CDS, liens profonds CKM3
- **Files-MCP**: Screenshots, exports, prompts

### **Exemples d'Usage**
```bash
# Déclencher un workflow n8n
"Lancez le forecast mensuel pour Company Code 1000"

# Analyser une anomalie
"Expliquez l'écart PUP sur Material 100001 ce mois"

# Générer un rapport
"Créez un rapport exécutif Q1 2025 avec recommendations"
```

## 📈 Roadmap 2025

### **Q1 2025** ✅
- [x] Dashboard multi-entités v2.0
- [x] Prédictions PUP avec IC
- [x] Intégration Claude MCP
- [x] Workflows n8n pré-configurés

### **Q2 2025** 🚧
- [ ] Intégration SAP Analytics Cloud
- [ ] Mobile app React Native
- [ ] Advanced ML models (Transformers)
- [ ] Multi-currency optimization

### **Q3 2025** 📋
- [ ] Real-time streaming analytics
- [ ] Custom ML model training
- [ ] Advanced governance features
- [ ] API marketplace

### **Q4 2025** 🎯
- [ ] Global deployment (US-East, APAC)
- [ ] Industry-specific templates
- [ ] Advanced AI copilot features
- [ ] Enterprise marketplace

## 🤝 Contribution

Nous accueillons toutes les contributions ! Voici comment participer :

1. Fork le projet
2. Créez votre branche feature (`git checkout -b feature/amazing-feature`)
3. Committez vos changements (`git commit -m 'Add amazing feature'`)
4. Push vers la branche (`git push origin feature/amazing-feature`)
5. Ouvrez une Pull Request

### **Guidelines de Développement**
- Code en TypeScript avec types stricts
- Tests unitaires requis pour les features ML
- Documentation complète des APIs
- Respect des standards RGPD/SOX

## 📞 Support & Contact

### **Support Technique**
- 📧 Email: support@sapience.ai
- 💬 Slack: [sapience-community.slack.com](https://sapience-community.slack.com)
- 📚 Documentation: [docs.sapience.ai](https://docs.sapience.ai)

### **Sales & Partenariats**
- 📈 Sales: sales@sapience.ai
- 🤝 Partenariats: partners@sapience.ai
- 🎯 Enterprise: enterprise@sapience.ai

### **Équipe Core**
- **Product**: Roadmap & vision produit
- **Engineering**: Architecture & développement
- **ML/AI**: Recherche & modèles prédictifs
- **SAP**: Expertise intégrations & consulting

## 📄 Licence

Ce projet est sous licence propriétaire SAPience. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

<div align="center">

**[🌐 Site Web](https://sapience.ai) • [📊 Démo Live](https://demo.sapience.ai) • [📚 Documentation](https://docs.sapience.ai) • [💬 Community](https://community.sapience.ai)**

*Transformez votre SAP avec l'intelligence artificielle* 🚀

[![Built with ❤️](https://img.shields.io/badge/Built%20with-❤️-red?style=for-the-badge)](https://sapience.ai)
[![Powered by AI](https://img.shields.io/badge/Powered%20by-AI-blue?style=for-the-badge)](https://sapience.ai)
[![EU Hosted](https://img.shields.io/badge/EU-Hosted-green?style=for-the-badge)](https://sapience.ai)

</div>
