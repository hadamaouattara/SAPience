import Link from 'next/link';

export default function Page() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:px-8">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full text-blue-200 text-sm font-medium mb-8">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            SAPience ML Platform v2.0 - Live
                        </div>
                        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
                            Transform Your SAP with
                            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> AI-Powered</span> Analytics
                        </h1>
                        <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto mb-12">
                            Prédiction PUP ML, détection d'anomalies intelligente, et what-if analysis pour optimiser vos processus Finance/CO et Supply Chain
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link 
                                href="/demo" 
                                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                                🚀 Voir la Demo
                            </Link>
                            <Link 
                                href="/integrations" 
                                className="inline-flex items-center px-8 py-4 border-2 border-white/20 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
                            >
                                💡 Découvrir les Intégrations
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Metrics Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">94.7%</div>
                            <div className="text-sm text-slate-600">PUP Accuracy</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-green-600 mb-2">15-25%</div>
                            <div className="text-sm text-slate-600">ROI Garanti</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-purple-600 mb-2">&lt;5%</div>
                            <div className="text-sm text-slate-600">MAPE Score</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-orange-600 mb-2">0-90j</div>
                            <div className="text-sm text-slate-600">Implémentation</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                            Killer Features SAPience
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Une plateforme complète pour maximiser la valeur de vos données SAP avec l'intelligence artificielle
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg border border-slate-200 hover:shadow-lg transition-all duration-300">
                            <div className="text-2xl mb-4">🤖</div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-2">Prédictions PUP ML</h3>
                            <p className="text-slate-600">Modèles LightGBM/XGBoost avec SHAP explainability pour prédire les provisions et ajustements</p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg border border-slate-200 hover:shadow-lg transition-all duration-300">
                            <div className="text-2xl mb-4">📊</div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-2">Dashboard Temps Réel</h3>
                            <p className="text-slate-600">Visualisation live des KPIs Finance/CO avec alertes intelligentes et Claude Copilot intégré</p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg border border-slate-200 hover:shadow-lg transition-all duration-300">
                            <div className="text-2xl mb-4">🔗</div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-2">Intégration SAP Native</h3>
                            <p className="text-slate-600">Connexion S/4HANA via BTP, OData, avec objets ACDOCA, MLDOC, CKML* pré-configurés</p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg border border-slate-200 hover:shadow-lg transition-all duration-300">
                            <div className="text-2xl mb-4">⚡</div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-2">n8n Orchestration</h3>
                            <p className="text-slate-600">Workflows automatisés : Monthly Close, Anomaly Watch, What-If Analysis, PUP Pipeline</p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg border border-slate-200 hover:shadow-lg transition-all duration-300">
                            <div className="text-2xl mb-4">🧠</div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-2">Claude Copilot</h3>
                            <p className="text-slate-600">Assistant IA conversationnel via MCP pour analyses complexes et recommandations business</p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg border border-slate-200 hover:shadow-lg transition-all duration-300">
                            <div className="text-2xl mb-4">🔒</div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-2">Enterprise Security</h3>
                            <p className="text-slate-600">RGPD compliant, SOX ready, hébergement EU-West-3 avec Row-Level Security multi-tenant</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                            Pricing Transparent
                        </h2>
                        <p className="text-xl text-slate-600">
                            Choisissez le plan adapté à vos besoins
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-lg border border-slate-200 hover:shadow-lg transition-all duration-300">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Essential</h3>
                            <div className="text-4xl font-bold text-blue-600 mb-6">€2-5k<span className="text-lg text-slate-600">/mois</span></div>
                            <ul className="space-y-3 text-slate-600 mb-8">
                                <li>✅ Dashboards Finance/CO</li>
                                <li>✅ Exports Excel/PDF</li>
                                <li>✅ Connexion SAP basique</li>
                                <li>✅ Support email</li>
                            </ul>
                        </div>
                        
                        <div className="bg-blue-50 p-8 rounded-lg border-2 border-blue-200 hover:shadow-lg transition-all duration-300 relative">
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">Recommandé</span>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Pro</h3>
                            <div className="text-4xl font-bold text-blue-600 mb-6">€6-12k<span className="text-lg text-slate-600">/mois</span></div>
                            <ul className="space-y-3 text-slate-600 mb-8">
                                <li>✅ Tout Essential +</li>
                                <li>✅ Prédictions ML PUP</li>
                                <li>✅ n8n Workflows</li>
                                <li>✅ Claude Copilot</li>
                                <li>✅ What-If Analysis</li>
                                <li>✅ Support prioritaire</li>
                            </ul>
                        </div>
                        
                        <div className="bg-white p-8 rounded-lg border border-slate-200 hover:shadow-lg transition-all duration-300">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Enterprise</h3>
                            <div className="text-4xl font-bold text-blue-600 mb-6">Sur devis</div>
                            <ul className="space-y-3 text-slate-600 mb-8">
                                <li>✅ Tout Pro +</li>
                                <li>✅ Multi-tenant avancé</li>
                                <li>✅ Custom ML models</li>
                                <li>✅ SLA 99.9%</li>
                                <li>✅ Déploiement on-premise</li>
                                <li>✅ Support 24/7</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-6">
                        Prêt à Transformer Votre SAP ?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Rejoignez 50+ entreprises qui ont déjà optimisé leurs processus Finance avec SAPience ML Platform
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                            📞 Demander une Démo Live
                        </button>
                        <button className="px-8 py-3 border border-white/20 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                            💬 Parler à un Expert
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
