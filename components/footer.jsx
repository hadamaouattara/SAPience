import Link from 'next/link';

const footerSections = [
    {
        title: 'Platform',
        links: [
            { name: 'Features', href: '/#features' },
            { name: 'Pricing', href: '#pricing' },
            { name: 'API Documentation', href: '/docs' },
            { name: 'Status', href: '/status' }
        ]
    },
    {
        title: 'Intégrations',
        links: [
            { name: 'SAP S/4HANA', href: '/integrations/s4hana' },
            { name: 'SAP BTP', href: '/integrations/btp' },
            { name: 'n8n Workflows', href: '/integrations/n8n' },
            { name: 'Claude AI', href: '/integrations/claude' }
        ]
    },
    {
        title: 'Solutions',
        links: [
            { name: 'Finance/CO', href: '/solutions/finance' },
            { name: 'Supply Chain', href: '/solutions/supply-chain' },
            { name: 'Contrôle de Gestion', href: '/solutions/controlling' },
            { name: 'Executive Dashboards', href: '/solutions/executive' }
        ]
    },
    {
        title: 'Support',
        links: [
            { name: 'Documentation', href: '/docs' },
            { name: 'Community', href: '/community' },
            { name: 'Support Center', href: '/support' },
            { name: 'Contact', href: '/contact' }
        ]
    }
];

export function Footer() {
    return (
        <footer className="bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">S</span>
                            </div>
                            <div>
                                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                                    SAPience
                                </span>
                                <div className="text-xs text-slate-400 font-medium">ML Platform v2.0</div>
                            </div>
                        </div>
                        <p className="text-slate-400 max-w-md mb-6">
                            Transform your SAP operations with AI-powered analytics, ML-driven PUP prediction, and intelligent automation. 
                            RGPD compliant • EU-West-3 hosting • SOX ready
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://github.com/hadamaouattara/SAPience" className="text-slate-400 hover:text-white transition-colors">
                                <span className="sr-only">GitHub</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Footer Links */}
                    {footerSections.map((section, index) => (
                        <div key={index}>
                            <h3 className="text-white font-semibold mb-4">{section.title}</h3>
                            <ul className="space-y-3">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <Link href={link.href} className="text-slate-400 hover:text-white transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-slate-400 text-sm">
                        © 2025 SAPience ML Platform. All rights reserved. Hébergé en EU-West-3 (Paris) - RGPD Compliant
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="text-slate-400 hover:text-white text-sm transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-slate-400 hover:text-white text-sm transition-colors">
                            Terms of Service
                        </Link>
                        <Link href="/security" className="text-slate-400 hover:text-white text-sm transition-colors">
                            Security
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
