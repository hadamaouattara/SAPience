import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | SAPience ML Platform',
        default: 'SAPience ML Platform - AI-Powered SAP Analytics & PUP Prediction'
    },
    description: 'Transform your SAP operations with SAPience ML Platform. Advanced ML-driven PUP prediction, anomaly detection, and intelligent what-if analysis for Finance/CO and Supply Chain optimization.',
    keywords: 'SAP, ML, PUP Prediction, Analytics, Finance, Supply Chain, AI, Machine Learning, Business Intelligence'
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#1e3a8a" />
            </head>
            <body className="antialiased text-slate-900 bg-gradient-to-br from-slate-50 to-blue-50">
                <div className="flex flex-col min-h-screen">
                    <Header />
                    <main className="grow">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
