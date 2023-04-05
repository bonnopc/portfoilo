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
export default function getDifferenceBetweenDates(startDate: Date, endDate: Date): number {
  const difference = endDate.getTime() - startDate.getTime();
  return roundToNearestIntegerOrPointFive(difference / (1000 * 60 * 60 * 24 * 365)); // that's for a year in milliseconds
}
