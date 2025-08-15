import { Card } from 'components/card';
import { FeatureGrid } from 'components/feature-grid';

const sapIntegrations = [
    {
        title: 'SAP S/4HANA On-Premise',
        description: 'Connexion via SAP Cloud Connector + BTP Destination Service',
        features: ['OData v2/v4 (CDS)', 'OAuth2SAMLBearerAssertion', 'Principal Propagation', 'Audit SAP-compliant'],
        status: 'ready',
        icon: '🏢'
    },
    {
        title: 'SAP S/4HANA Cloud / RISE',
        description: 'Connexion directe OData avec authentification cloud',
        features: ['OData direct', 'OAuth/SCP', 'Multi-tenant ready', 'Auto-scaling'],
        status: 'ready',
        icon: '☁️'
    },
    {
        title: 'VPN/IPSec (Fallback)',
        description: 'Pour clients refusant BTP - Reverse proxy avec Mutual TLS',
        features: ['VPN sécurisé', 'Mutual TLS', 'Firewall rules', 'Monitoring avancé'],
        status: 'ready',
        icon: '🔒'
    }
];

const dataObjects = [
    'ACDOCA (Documents comptables)',
    'MLDOC/MLDOC_EXTRACT (ML documents)', 
    'CKMLHD/CKMLPR/CKMLCR (Prix matières)',
    'MBEW/MBEW_MLD (Valorisation)',
    'EKKO/EKPO (Commandes d\'achat)',
    'MSEG/BKPF (Mouvements matières)',
    'Tables FX (Taux de change)'
];

const n8nWorkflows = [
    {
        name: 'Monthly Close Forecast',
        description: 'Extraction CDS → Feature Store → ML Predict → Push KPIs → Rapport contrôleurs',
        trigger: 'Cron fin de mois',
        status: 'active'
    },
    {
        name: 'Anomaly Watch',
        description: 'Détection quotidienne outliers → Notifications Teams/Email → Tickets Jira',
        trigger: 'Quotidien 06:00',
        status: 'active'
    },
    {
        name: 'What-if Batch',
        description: 'Simulation scénarios standard (±3% prix, ±5% FX) → Rapports impact',
        trigger: 'Hebdomadaire',
        status: 'scheduled'
    },
    {
        name: 'PUP Prediction Pipeline',
        description: 'Entraînement modèles ML → Validation → Déploiement → Monitoring drift',
        trigger: 'On-demand',
        status: 'active'
    }
];

export default function IntegrationsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            {/* Header */}
            <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                            Intégrations SAP & Orchestration n8n
                        </h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            Connectez SAPience à votre écosystème SAP avec des intégrations sécurisées et des workflows intelligents
                        </p>
                    </div>
                </div>
            </section>

            {/* SAP Integrations */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">
                            🔗 Connexions SAP Supportées
                        </h2>
                        <p className="text-xl text-slate-600">
                            Choix flexible d'intégration selon votre architecture SAP
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                        {sapIntegrations.map((integration, index) => (
                            <Card key={index} className="h-full p-6 hover:shadow-xl transition-all duration-300">
                                <div className="text-center mb-4">
                                    <div className="text-4xl mb-2">{integration.icon}</div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{integration.title}</h3>
                                    <p className="text-slate-600 text-sm">{integration.description}</p>
                                </div>
                                
                                <ul className="space-y-2 mb-6">
                                    {integration.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center text-sm text-slate-700">
                                            <span className="text-green-500 mr-2">✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                
                                <div className="text-center">
                                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                                        integration.status === 'ready' 
                                            ? 'bg-green-100 text-green-800' 
                                            : 'bg-yellow-100 text-yellow-800'
                                    }`}>
                                        {integration.status === 'ready' ? '✅ Production Ready' : '🚧 En Développement'}
                                    </span>
                                </div>
                            </Card>
                        ))}
                    </div>
                    
                    {/* Data Objects */}
                    <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
                        <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
                            📊 Objets SAP Supportés (Lecture)
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                            {dataObjects.map((object, index) => (
                                <div key={index} className="flex items-center text-blue-800 bg-white rounded-lg px-3 py-2 text-sm">
                                    <span className="text-blue-500 mr-2">📋</span>
                                    {object}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* n8n Workflows */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">
                            ⚡ Workflows n8n Pré-configurés
                        </h2>
                        <p className="text-xl text-slate-600">
                            Orchestration intelligente de vos processus SAP avec n8n
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {n8nWorkflows.map((workflow, index) => (
                            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-2">{workflow.name}</h3>
                                        <p className="text-slate-600 text-sm mb-3">{workflow.description}</p>
                                        <div className="flex items-center text-sm text-slate-500">
                                            <span className="mr-2">⏰</span>
                                            {workflow.trigger}
                                        </div>
                                    </div>
                                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                        workflow.status === 'active' 
                                            ? 'bg-green-100 text-green-800' 
                                            : 'bg-blue-100 text-blue-800'
                                    }`}>
                                        {workflow.status === 'active' ? '🟢 Actif' : '🔵 Planifié'}
                                    </span>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Claude MCP Integration */}
            <section className="py-16 bg-gradient-to-b from-purple-50 to-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">
                            🧠 Claude MCP - Copilot Opérationnel
                        </h2>
                        <p className="text-xl text-slate-600 mb-8">
                            Assistant IA intégré pour analyses, explications et automatisations
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                        <span className="text-purple-600 text-xl">🔗</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-900 mb-2">MCP Servers Intégrés</h3>
                                        <ul className="text-slate-600 text-sm space-y-1">
                                            <li>• GitHub-MCP: Gestion PRs, releases, notebooks</li>
                                            <li>• n8n-MCP: Triggers workflows, lecture logs</li>
                                            <li>• SAP-MCP: Requêtes CDS, liens profonds CKM3</li>
                                            <li>• Files-MCP: Screenshots, exports, prompts</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <span className="text-blue-600 text-xl">🎯</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-900 mb-2">RAG + Contexte Métier</h3>
                                        <p className="text-slate-600 text-sm">
                                            Index des CDS exportées + docs métier (règles variance, politique FX) pour réponses contextuelles
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                        <span className="text-green-600 text-xl">🛡️</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Prompts Sécurisés</h3>
                                        <p className="text-slate-600 text-sm">
                                            Injection de chiffres vérifiés, réponses signées avec source + timestamp, liens CKM3 directs
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-xl p-6 text-white">
                            <div className="mb-4">
                                <div className="flex items-center space-x-2 mb-2">
                                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                                        <span className="text-white text-xs font-bold">C</span>
                                    </div>
                                    <span className="font-semibold">Claude Copilot SAPience</span>
                                </div>
                                <div className="text-purple-200 text-sm">Exemple d'interaction</div>
                            </div>
                            
                            <div className="space-y-3 text-sm">
                                <div className="bg-white/10 rounded-lg p-3">
                                    <div className="text-blue-200 text-xs mb-1">Utilisateur:</div>
                                    <div>"Expliquez l'écart PUP sur Material 100001 ce mois"</div>
                                </div>
                                
                                <div className="bg-purple-500/20 rounded-lg p-3">
                                    <div className="text-purple-200 text-xs mb-1">Claude:</div>
                                    <div>📊 J'analyse l'écart de +15.3% sur Material 100001...<br/>
                                    🔍 Causes identifiées: Prix achat +12%, FX EUR/USD +3.1%<br/>
                                    📋 <a href="#" className="text-cyan-300 underline">Ouvrir CKM3 Company 1000</a><br/>
                                    📈 Recommandation: Ajuster forecast Q2 2025</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
