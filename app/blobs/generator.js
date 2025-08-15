// SAPience ML Platform - Clean Generator
// Remplacement du générateur problématique

export function generateCleanId() {
    return `sapience-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

export function generateSafeContent() {
    return {
        id: generateCleanId(),
        type: 'safe-content',
        status: 'clean',
        timestamp: new Date().toISOString()
    };
}

export default {
    generateCleanId,
    generateSafeContent
};