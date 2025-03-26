export default function calculateCanvasSize(
  length: string,
  width: string
) {
  return 2 * (parseInt(length) + parseInt(width));
}
