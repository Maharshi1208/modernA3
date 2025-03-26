import calculateCanvasSize from "./calculateCanvasSize";
import paintRequiredCalculator from "./paintRequiredCalculator";

function main() {
  const area = calculateCanvasSize("10", "20");
  const coveragePerLiter = 11.4;

  const paintRequired = paintRequiredCalculator(area, coveragePerLiter);

  console.log(`${paintRequired} is required to cover ${area} of canvas.`);
}

main();
