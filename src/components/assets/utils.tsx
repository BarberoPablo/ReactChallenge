export function parseNumber(number: number) {
  return Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "USD",
  }).format(number);
}
