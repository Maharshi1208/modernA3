import calculatePaintCost from './calculatePaintCost';

describe('calculatePaintCost', () => {
  test('should calculate paint cost correctly for positive values', () => {
    expect(calculatePaintCost(10, 5)).toBe(50);
    expect(calculatePaintCost(20, 7.5)).toBe(150);
    expect(calculatePaintCost(15, 10)).toBe(150);
  });

  test('should return 0 when paint required is 0', () => {
    expect(calculatePaintCost(0, 5)).toBe(0);
  });

  test('should return 0 when cost per liter is 0', () => {
    expect(calculatePaintCost(10, 0)).toBe(0);
  });

  test('should handle negative values correctly', () => {
    expect(calculatePaintCost(-10, 5)).toBe(-50);
    expect(calculatePaintCost(10, -5)).toBe(-50);
    expect(calculatePaintCost(-10, -5)).toBe(50);
  });
  test('should handle decimal values precisely', () => {
    expect(calculatePaintCost(1.5, 2.5)).toBeCloseTo(3.75); // 1.5 * 2.5 = 3.75
    expect(calculatePaintCost(0.1, 0.2)).toBeCloseTo(0.02); // 0.1 * 0.2 = 0.02
  });
  test('should handle large numbers correctly', () => {
    expect(calculatePaintCost(1e6, 1e6)).toBe(1e12); // 1,000,000 * 1,000,000
  });
  test('should handle maximum safe integer values', () => {
    const max = Number.MAX_SAFE_INTEGER;
    expect(calculatePaintCost(max, 1)).toBe(max);
    expect(calculatePaintCost(1, max)).toBe(max);
  });
  test('should throw error for negative paint required', () => {
    expect(() => calculatePaintCost(-10, 5)).toThrow('Paint required cannot be negative');
  });
  test('should return NaN for non-finite numbers', () => {
    expect(calculatePaintCost(Infinity, 5)).toBeNaN();
    expect(calculatePaintCost(5, NaN)).toBeNaN();
  });
});
