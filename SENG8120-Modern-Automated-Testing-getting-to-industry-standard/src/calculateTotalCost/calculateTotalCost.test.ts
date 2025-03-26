import calculateTotalCost from './calculateTotalCost';

describe('calculateTotalCost', () => {
  test('should calculate total cost correctly for positive values', () => {
    expect(calculateTotalCost(100, 50)).toBe(150);
    expect(calculateTotalCost(200, 75)).toBe(275);
    expect(calculateTotalCost(150, 100)).toBe(250);
  });

  test('should return paint cost when labor cost is 0', () => {
    expect(calculateTotalCost(100, 0)).toBe(100);
  });

  test('should return labor cost when paint cost is 0', () => {
    expect(calculateTotalCost(0, 50)).toBe(50);
  });

  test('should handle negative values correctly', () => {
    expect(calculateTotalCost(-100, 50)).toBe(-50);
    expect(calculateTotalCost(100, -50)).toBe(50);
    expect(calculateTotalCost(-100, -50)).toBe(-150);
  });

  test('should return 0 when both costs are 0', () => {
    expect(calculateTotalCost(0, 0)).toBe(0);
  });
  test('should handle decimal values precisely', () => {
    expect(calculateTotalCost(100.50, 50.25)).toBeCloseTo(150.75);
    expect(calculateTotalCost(0.1, 0.2)).toBeCloseTo(0.3);
  });
  test('should handle maximum safe integer values', () => {
    const max = Number.MAX_SAFE_INTEGER;
    expect(calculateTotalCost(max, 0)).toBe(max);
    expect(calculateTotalCost(0, max)).toBe(max);
  });
  test('should return NaN for non-finite numbers', () => {
    expect(calculateTotalCost(NaN, 50)).toBeNaN();
    expect(calculateTotalCost(100, Infinity)).toBeNaN();
    expect(calculateTotalCost(-Infinity, Infinity)).toBeNaN();
  });
});
