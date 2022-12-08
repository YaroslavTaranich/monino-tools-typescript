export function calculatePrice(price: number, days: number) {
  if (days < 3) return price
  if (days < 7) return Math.ceil((price / 100) * 0.9) * 100
  if (days < 21) return Math.ceil((price / 100) * 0.75) * 100
  return Math.ceil((price / 100) * 0.6) * 100
}
