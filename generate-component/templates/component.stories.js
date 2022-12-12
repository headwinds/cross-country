module.exports = (componentUpperCaseName, atomicTypeName) => ({
  content: `import React from "react";
import ${componentUpperCaseName} from "../";

export default {
    title: "menu/${atomicTypeName}/${componentUpperCaseName.toLowerCase()}"
};

export const WithBar = () => <${componentUpperCaseName} foo="bar" />;

export const WithBaz = () => <${componentUpperCaseName} foo="baz" />;
`,
  extension: `.stories.tsx`,
});
