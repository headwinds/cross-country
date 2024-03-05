module.exports = (componentUpperCaseName, componentLowerCaseName) => ({
  content: `export interface ${componentUpperCaseName}Props {
    foo?: string;
}
`,
  extension: `.types.ts`,
  name: componentLowerCaseName,
});
