import Link from 'next/link';

export function CTASection() {
    return (
        <section className="py-24 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                        Prêt à Transformer Votre SAP avec l'IA ?
                    </h2>
                    <p className="text-xl lg:text-2xl text-blue-100 mb-12">
                        Rejoignez 50+ entreprises qui optimisent déjà leurs processus Finance/CO et Supply Chain avec SAPience ML Platform
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <div className="text-center">
                            <div className="text-3xl mb-2">⚡</div>
                            <div className="text-lg font-semibold mb-1">Setup Rapide</div>
                            <div className="text-blue-200 text-sm">0-15 jours pour être opérationnel</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl mb-2">🎯</div>
                            <div className="text-lg font-semibold mb-1">ROI Garanti</div>
                            <div className="text-blue-200 text-sm">15-25% réduction erreurs forecast</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl mb-2">🛡️</div>
                            <div className="text-lg font-semibold mb-1">Sécurité Entreprise</div>
                            <div className="text-blue-200 text-sm">RGPD + SOX ready + EU hosting</div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Link 
                            href="/demo" 
                            className="inline-flex items-center px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                        >
                            🚀 Demander une Démo Live
                        </Link>
                        <Link 
                            href="/contact" 
                            className="inline-flex items-center px-8 py-4 border-2 border-white/20 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
                        >
                            💬 Parler à un Expert
                        </Link>
                    </div>
                    
                    <div className="mt-12 pt-8 border-t border-white/20">
                        <p className="text-blue-200 text-sm mb-4">
                            Déjà convaincu ? Commencez votre essai gratuit 30 jours
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link 
                                href="/signup" 
                                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                            >
                                ✨ Essai Gratuit 30 Jours
                            </Link>
                            <span className="text-blue-300 text-sm">Aucune carte de crédit requise</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
