module.exports = {
  // this will check Typescript files
  "**/*.(ts|tsx)": () => "yarn tsc --noEmit",

  // This will lint and format TypeScript and JavaScript files
  "**/*.(ts|tsx|js)": (filenames) => [
    `yarn eslint ${filenames.join(" ")}`,
    `yarn format ${filenames.join(" ")}`,
  ],

  // this will Format MarkDown and JSON
  "**/*.(md|json|scss|css)": (filenames) => `yarn format ${filenames.join(" ")}`,
};
