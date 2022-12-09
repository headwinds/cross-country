module.exports = (componentName, atomicTypeName) => ({
  content: `import React from "react";
import ${(componentName, atomicTypeName)} from "../";

export default {
    title: "menu/${atomicTypeName}/${componentName}"
};

export const WithBar = () => <${componentName} foo="bar" />;

export const WithBaz = () => <${componentName} foo="baz" />;
`,
  extension: `.stories.tsx`,
});
