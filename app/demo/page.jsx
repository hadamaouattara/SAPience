import { DashboardPreview } from 'components/dashboard-preview';
import { Card } from 'components/card';

const demoFeatures = [
    {
        title: 'Dashboard Temps Réel',
        description: 'Visualisation live des KPIs SAP avec prédictions ML',
        demo: 'Interactive dashboard ci-dessous'
    },
    {
        title: 'Prédictions PUP',
        description: 'Modèles ML avec intervalles de confiance',
        demo: 'MAPE < 5% garanti'
    },
    {
        title: 'Alertes Intelligentes',
        description: 'n8n workflows avec notifications smart',
        demo: 'Démo d\'alerte en temps réel'
    },
    {
        title: 'Claude Copilot',
        description: 'Assistant IA conversationnel intégré',
        demo: 'Testez les questions/réponses'
    }
];

export default function DemoPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            {/* Hero */}
            <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                            🚀 Démo Live SAPience ML Platform
                        </h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                            Explorez toutes les fonctionnalités de SAPience avec des données SAP simulées
                        </p>
                        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-500/20 rounded-full text-green-200 text-sm font-medium">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            <span>Demo Environment Active - Company Code 1000</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Demo Features Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">
                            Fonctionnalités Démontrables
                        </h2>
                        <p className="text-xl text-slate-600">
                            Testez chaque module de la plateforme SAPience
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {demoFeatures.map((feature, index) => (
                            <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300">
                                <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                                <p className="text-slate-600 text-sm mb-3">{feature.description}</p>
                                <div className="text-xs text-blue-600 font-medium">{feature.demo}</div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Live Dashboard Demo */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">
                            📊 Dashboard Interactif
                        </h2>
                        <p className="text-xl text-slate-600 mb-8">
                            Naviguez dans les différents modules : Vue d'ensemble, Prédictions, Anomalies, What-If
                        </p>
                    </div>
                    
                    <DashboardPreview />
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-blue-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">
                        Prêt à Implémenter SAPience ?
                    </h2>
                    <p className="text-xl text-slate-600 mb-8">
                        Cette démo vous donne un aperçu de la puissance de SAPience. Contactez-nous pour une démonstration personnalisée avec vos données SAP.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                            📞 Planifier une Démo Personnalisée
                        </button>
                        <button className="px-8 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                            💬 Parler à un Expert
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
