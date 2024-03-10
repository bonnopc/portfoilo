import roundToNearestIntegerOrPointFive from "./roundToNearestIntegerOrPointFive";

/**
 * Returns the difference between two dates in years.
 * @param startDate The start date.
 * @param endDate The end date.
 * @returns The difference between the two dates in years.
 * @example
 * getDifferenceBetweenDates(new Date(2020, 0, 1), new Date(2021, 0, 1)); // 1
 * getDifferenceBetweenDates(new Date(2020, 0, 1), new Date(2021, 6, 1)); // 1.5
 **/
export default function getDifferenceBetweenDates(
  startDate: Date,
  endDate: Date,
  precision: number = 1
): number | string {
  const difference = endDate.getTime() - startDate.getTime();
  const diffInYears = difference / (1000 * 60 * 60 * 24 * 365); // that's for a year in milliseconds
  return precision === 1 ? roundToNearestIntegerOrPointFive(diffInYears) : Math.floor(diffInYears); // that's for a year in milliseconds
}
