/**
 * This function rounds a number to the nearest integer or .5.
 * @param number The number to round.
 * @returns The rounded number.
 * @example
 * roundToNearestIntegerOrPointFive(1.2); // 1
 * roundToNearestIntegerOrPointFive(1.5); // 1.5
 * roundToNearestIntegerOrPointFive(1.8); // 2
 */
export default function roundToNearestIntegerOrPointFive(number: number): number {
  const rounded = Math.round(number);
  return rounded % 1 === 0.5 ? rounded : Math.round(number * 2) / 2;
}
