import calculateCanvasDiagonal from './calculateCanvasDiagonal';

describe('calculateCanvasDiagonal', () => {
  test('should calculate diagonal correctly for positive values', () => {
    expect(calculateCanvasDiagonal('3', '4')).toBeCloseTo(5);
    expect(calculateCanvasDiagonal('6', '8')).toBeCloseTo(10);
    expect(calculateCanvasDiagonal('5', '12')).toBeCloseTo(13);
  });

  test('should return 0 for length and width of 0', () => {
    expect(calculateCanvasDiagonal('0', '0')).toBe(0);
  });

  test('should handle negative values correctly', () => {
    expect(calculateCanvasDiagonal('-3', '4')).toBeCloseTo(5);
    expect(calculateCanvasDiagonal('3', '-4')).toBeCloseTo(5);
    expect(calculateCanvasDiagonal('-3', '-4')).toBeCloseTo(5);
  });

  test('should handle non-numeric strings by returning NaN', () => {
    expect(calculateCanvasDiagonal('a', '4')).toBeNaN();
    expect(calculateCanvasDiagonal('3', 'b')).toBeNaN();
    expect(calculateCanvasDiagonal('a', 'b')).toBeNaN();
  });
  test('should handle decimal values correctly', () => {
    expect(calculateCanvasDiagonal('1.5', '2.0')).toBeCloseTo(2.5); // 1.5² + 2² = 6.25 → √6.25 = 2.5
    expect(calculateCanvasDiagonal('2.4', '3.2')).toBeCloseTo(4); // 2.4² + 3.2² = 16 → √16 = 4
  });
  test('should handle large numbers correctly', () => {
    expect(calculateCanvasDiagonal('1000', '1000')).toBeCloseTo(1414.21, 2); // 1000√2 ≈ 1414.21
  });
  test('should handle empty strings by returning NaN', () => {
    expect(calculateCanvasDiagonal('', '4')).toBeNaN();
    expect(calculateCanvasDiagonal('3', '')).toBeNaN();
    expect(calculateCanvasDiagonal('', '')).toBeNaN();
  });
  test('should handle mixed valid and invalid inputs', () => {
    expect(calculateCanvasDiagonal('3', '')).toBeNaN();
    expect(calculateCanvasDiagonal('', '4')).toBeNaN();
  });
  test('should return precise values', () => {
    // Test more decimal places than needed to verify precision
    expect(calculateCanvasDiagonal('1', '1')).toBeCloseTo(1.414213562, 8); // √2
  });
});

