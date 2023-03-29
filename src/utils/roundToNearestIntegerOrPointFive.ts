export default function roundToNearestIntegerOrPointFive(number: number): number {
  const rounded = Math.round(number);
  return rounded % 1 === 0.5 ? rounded : Math.round(number * 2) / 2;
}
