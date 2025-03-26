import paintRequiredCalculator from "./paintRequiredCalculator";

test("calculates paint required correctly", () => {
  expect(paintRequiredCalculator(100)).toBe(1);
});
