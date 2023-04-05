/**
 * Returns a string of class names based on the styles and classes objects.
 * This can be used to dynamically add class names to a component.
 * It only works for class names that are defined in the styles object/ modular css file.
 * @param styles
 * @param classes
 * @param classNameString
 * @returns A string of class names.
 * @example
 * const styles = {
 *  container: "container",
 *  header: "header",
 * };
 * const classes = {
 *  container: true,
 *  header: false,
 * };
 * combineClassNames(styles, classes); // "container"
 */
const combineClassNames = (
  styles: { [key: string]: string },
  classes: { [key: string]: string | boolean },
  classNameString?: string
): string => {
  let classStr: string = "";

  try {
    if (Object.keys(classes).length) {
      Object.keys(classes).forEach((key, i) => {
        if (classes[key]) {
          if (i == 0) classStr += styles[key];
          else classStr += ` ${styles[key]}`;
        }
      });
    }
  } catch (error) {
    console.error("Error in parsing ClassNames:", error);
  }

  if (classNameString) classStr += ` ${classNameString}`;

  return classStr;
};

export default combineClassNames;
