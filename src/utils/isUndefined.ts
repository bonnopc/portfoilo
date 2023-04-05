/**
 * It can check if a value is undefined or not.
 * returns true if the value is undefined.
 * @param val
 * @returns boolean
 * @example
 * isUndefined(undefined); // true
 * isUndefined(null); // false
 * isUndefined(0); // false
 */
const isUndefined = (val?: any): boolean => typeof val === "undefined";

export default isUndefined;
