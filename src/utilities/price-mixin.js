import { formatCurrency, formatPrice } from './price'

export default {
  filters: {
    price: formatPrice,
    currency: formatCurrency
  }
}
