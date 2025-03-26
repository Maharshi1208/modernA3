import { addNumbers } from '../src/addNumbers';

describe('addNumbers function', () => {
  // Basic functionality
  test('adds two positive numbers correctly', () => {
    expect(addNumbers(2, 3)).toBe(5);
  });

  // Edge case 1
  test('adds zero correctly', () => {
    expect(addNumbers(0, 5)).toBe(5);
    expect(addNumbers(5, 0)).toBe(5);
  });

  // Edge case 2
  test('adds negative numbers correctly', () => {
    expect(addNumbers(-1, -1)).toBe(-2);
    expect(addNumbers(-5, 3)).toBe(-2);
  });

  // Floating point numbers
  test('adds decimal numbers correctly', () => {
    expect(addNumbers(1.5, 2.5)).toBe(4);
    expect(addNumbers(0.1, 0.2)).toBeCloseTo(0.3); // For floating point precision
  });
});
