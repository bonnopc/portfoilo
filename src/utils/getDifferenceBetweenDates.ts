import roundToNearestIntegerOrPointFive from "./roundToNearestIntegerOrPointFive";

export default function getDifferenceBetweenDates(startDate: Date, endDate: Date): number {
  const difference = endDate.getTime() - startDate.getTime();
  return roundToNearestIntegerOrPointFive(difference / (1000 * 60 * 60 * 24 * 365));
}
