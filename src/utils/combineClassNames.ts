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
