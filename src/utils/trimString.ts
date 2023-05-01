export default function trimString(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  // we will not show an incomplete word
  // so we need to find the last space in the string
  // and remove everything after it
  const lastSpaceIndex = str.lastIndexOf(" ", maxLength);
  return str.slice(0, lastSpaceIndex) + "...";
}
