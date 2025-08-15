import Link from 'next/link';
import { Card } from 'components/card';
import { DashboardPreview } from 'components/dashboard-preview';
import { FeatureGrid } from 'components/feature-grid';
import { MetricsSection } from 'components/metrics-section';
import { PricingSection } from 'components/pricing-section';
import { TestimonialsSection } from 'components/testimonials-section';
import { CTASection } from 'components/cta-section';

export default function Page() {
    return (
        <div className="">
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
                                href="#demo" 
                                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                                🚀 Voir la Demo
                            </Link>
                            <Link 
                                href="#pricing" 
                                className="inline-flex items-center px-8 py-4 border-2 border-white/20 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
                            >
                                💡 Découvrir les Prix
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Metrics Section */}
            <MetricsSection />

            {/* Features Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                            Killer Features SAPience
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Une plateforme complète pour maximiser la valeur de vos données SAP avec l'intelligence artificielle
                        </p>
                    </div>
                    <FeatureGrid />
                </div>
            </section>

            {/* Dashboard Preview */}
            <section id="demo" className="py-24 bg-gradient-to-b from-slate-50 to-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                            Dashboard Multi-Entités en Action
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Visualisez vos KPIs SAP avec des prédictions ML en temps réel et des alertes intelligentes
                        </p>
                    </div>
                    <DashboardPreview />
                </div>
            </section>

            {/* Testimonials */}
            <TestimonialsSection />

            {/* Pricing */}
            <PricingSection />

            {/* CTA Section */}
            <CTASection />
        </div>
    );
}
