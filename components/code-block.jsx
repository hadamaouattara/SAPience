// SAPience ML Platform - Clean Code Block
// Remplacement du code-block problématique

export default function CodeBlock({ children, className = '', language = '' }) {
    return (
        <div className={`bg-slate-900 rounded-lg p-4 overflow-x-auto ${className}`}>
            <pre className="text-slate-100 text-sm">
                <code className={`language-${language}`}>
                    {children}
                </code>
            </pre>
        </div>
    );
}