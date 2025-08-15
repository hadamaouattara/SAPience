// SAPience ML Platform - Clean Markdown
// Remplacement du markdown problématique

import CodeBlock from './code-block';

export default function Markdown({ children, className = '' }) {
    // Simple markdown renderer without external dependencies
    const renderContent = (content) => {
        if (typeof content === 'string') {
            // Simple processing for basic markdown
            const lines = content.split('\n');
            return lines.map((line, index) => {
                // Headers
                if (line.startsWith('# ')) {
                    return <h1 key={index} className="text-3xl font-bold mb-4">{line.substring(2)}</h1>;
                }
                if (line.startsWith('## ')) {
                    return <h2 key={index} className="text-2xl font-bold mb-3">{line.substring(3)}</h2>;
                }
                if (line.startsWith('### ')) {
                    return <h3 key={index} className="text-xl font-bold mb-2">{line.substring(4)}</h3>;
                }
                
                // Code blocks (simple detection)
                if (line.startsWith('```')) {
                    return null; // Skip code fence markers
                }
                
                // Paragraphs
                if (line.trim()) {
                    return <p key={index} className="mb-4">{line}</p>;
                }
                
                return null;
            }).filter(Boolean);
        }
        
        return content;
    };

    return (
        <div className={`prose prose-slate max-w-none ${className}`}>
            {renderContent(children)}
        </div>
    );
}