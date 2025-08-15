import Image from 'next/image';
import Link from 'next/link';

const navItems = [
    { linkText: 'Platform', href: '/' },
    { linkText: '🔧 Intégrations SAP', href: '/integrations' },
    { linkText: '📊 Analytics', href: '/analytics' },
    { linkText: '🤖 ML Models', href: '/ml-models' },
    { linkText: '💡 Pricing', href: '#pricing' },
    { linkText: '📖 Docs', href: '/docs' }
];

export function Header() {
    return (
        <header className="relative bg-white/95 backdrop-blur-md border-b border-slate-200/60 sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3 group">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
                            <span className="text-white font-bold text-xl">S</span>
                        </div>
                        <div>
                            <span className="text-xl font-bold bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
                                SAPience
                            </span>
                            <div className="text-xs text-slate-500 font-medium">ML Platform v2.0</div>
                        </div>
                    </Link>

                    {/* Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className="px-4 py-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
                            >
                                {item.linkText}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex items-center space-x-4">
                        <Link
                            href="/login"
                            className="hidden sm:inline-flex px-4 py-2 text-slate-700 hover:text-blue-600 font-medium transition-colors"
                        >
                            Se connecter
                        </Link>
                        <Link
                            href="/demo"
                            className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                        >
                            🚀 Demo Live
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}
