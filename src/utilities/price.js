export function formatPrice (price = 0, decimalPlaces = 2) {
  return Number(price).toFixed(decimalPlaces)
}

export function formatCurrency (price = '', currency = 'CZK') {
  return `${currency} ${price}`
}
