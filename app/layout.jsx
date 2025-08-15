import './globals.css';

export const metadata = {
  title: 'SAPience ML Platform - AI-Powered SAP Analytics & PUP Prediction',
  description: 'Transform Your SAP with AI-Powered Analytics. Prédiction PUP ML, détection d\'anomalies intelligente, et what-if analysis pour optimiser vos processus Finance/CO et Supply Chain.',
  keywords: 'SAP, Machine Learning, PUP Prediction, Finance, Supply Chain, Analytics, Business Intelligence, AI, n8n, Claude, SaaS',
  openGraph: {
    title: 'SAPience ML Platform - AI-Powered SAP Analytics',
    description: 'Transform Your SAP with AI-Powered Analytics & PUP Prediction',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-white text-slate-900 font-sans antialiased">
        <header className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                SAPience ML Platform
              </div>
              <nav className="hidden md:flex items-center space-x-8">
                <a href="#features" className="text-slate-600 hover:text-blue-600 transition-colors">Features</a>
                <a href="/demo" className="text-slate-600 hover:text-blue-600 transition-colors">Demo</a>
                <a href="/integrations" className="text-slate-600 hover:text-blue-600 transition-colors">Intégrations</a>
                <a href="#pricing" className="text-slate-600 hover:text-blue-600 transition-colors">Pricing</a>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Essai Gratuit
                </button>
              </nav>
            </div>
          </div>
        </header>
        
        <main>{children}</main>
        
        <footer className="bg-slate-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-2xl font-bold mb-4">SAPience</div>
                <p className="text-slate-400">
                  Transform Your SAP with AI-Powered Analytics & PUP Prediction
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Produit</h3>
                <ul className="space-y-2 text-slate-400">
                  <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                  <li><a href="/demo" className="hover:text-white transition-colors">Demo</a></li>
                  <li><a href="/integrations" className="hover:text-white transition-colors">Intégrations</a></li>
                  <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Entreprise</h3>
                <ul className="space-y-2 text-slate-400">
                  <li><a href="#security" className="hover:text-white transition-colors">Sécurité</a></li>
                  <li><a href="#compliance" className="hover:text-white transition-colors">Compliance</a></li>
                  <li><a href="#support" className="hover:text-white transition-colors">Support</a></li>
                  <li><a href="#api" className="hover:text-white transition-colors">API</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Contact</h3>
                <ul className="space-y-2 text-slate-400">
                  <li>hello@sapience.ai</li>
                  <li>+33 1 XX XX XX XX</li>
                  <li>Paris, France</li>
                  <li>EU-West-3 Hosting</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
              <p>&copy; 2025 SAPience ML Platform. All rights reserved. | RGPD Compliant | SOX Ready</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
