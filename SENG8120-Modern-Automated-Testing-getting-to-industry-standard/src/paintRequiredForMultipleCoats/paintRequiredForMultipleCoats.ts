export default function paintRequiredForMultipleCoats(area: number, coveragePerLiter: number, coats: number): number {
  return (area / coveragePerLiter) * coats;
}
