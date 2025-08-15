// SAPience ML Platform - Utils
// Remplacement des utils obsolètes

export const uploadDisabled = true;

export function formatCurrency(amount, currency = 'EUR') {
    return new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency
    }).format(amount);
}

export function formatDate(date) {
    return new Intl.DateTimeFormat('fr-FR').format(new Date(date));
}

export function cn(...classes) {
    return classes.filter(Boolean).join(' ');
}
