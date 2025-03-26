export default function convertAreaToSquareFeet(area: number): number {
  const conversionFactor = 10.7639;
  return area * conversionFactor;
}
