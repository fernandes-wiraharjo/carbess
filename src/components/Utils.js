export function formattedNumber(value) {
    return Intl.NumberFormat("id-ID", { maximumFractionDigits: 2 }).format(value);
};