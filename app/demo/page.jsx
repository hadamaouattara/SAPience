import Link from 'next/link';

const demoFeatures = [
    {
        title: 'Dashboard Temps Réel',
        description: 'Visualisation live des KPIs SAP avec prédictions ML',
        demo: 'Interface responsive et moderne'
    },
    {
        title: 'Prédictions PUP',
        description: 'Modèles ML avec intervalles de confiance',
        demo: 'MAPE < 5% garanti'
    },
    {
        title: 'Alertes Intelligentes',
        description: 'n8n workflows avec notifications smart',
        demo: 'Notifications en temps réel'
    },
    {
        title: 'Claude Copilot',
        description: 'Assistant IA conversationnel intégré',
        demo: 'Questions/réponses intelligentes'
    }
];

function Card({ children, className }) {
    return (
        <div className={`bg-white rounded-lg border border-slate-200 ${className}`}>
            {children}
        </div>
    );
}

export default function DemoPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            {/* Hero */}
            <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                            🚀 Démo SAPience ML Platform
                        </h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                            Découvrez la puissance de SAPience avec l'IA pour transformer vos processus SAP
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
                            Fonctionnalités SAPience
                        </h2>
                        <p className="text-xl text-slate-600">
                            Explorez les modules de la plateforme IA
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

            {/* Dashboard Preview Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">
                            📊 Interface SAPience
                        </h2>
                        <p className="text-xl text-slate-600 mb-8">
                            Interface moderne et intuitive pour vos analyses SAP
                        </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
                        <div className="text-center">
                            <div className="text-6xl mb-4">🎯</div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">
                                Dashboard SAPience ML
                            </h3>
                            <p className="text-slate-600 mb-6">
                                Interface responsive avec visualisations temps réel, prédictions ML, 
                                et intégration Claude Copilot pour vos analyses SAP.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4 text-sm">
                                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">Vue d'ensemble</span>
                                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full">Prédictions</span>
                                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full">Anomalies</span>
                                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full">What-If</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-blue-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">
                        Prêt à Transformer Votre SAP ?
                    </h2>
                    <p className="text-xl text-slate-600 mb-8">
                        SAPience ML Platform révolutionne vos processus Finance/CO avec l'intelligence artificielle.
                        Contactez-nous pour une démonstration personnalisée.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            href="/"
                            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                            ← Retour à l'accueil
                        </Link>
                        <button className="px-8 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                            💬 Parler à un Expert
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}