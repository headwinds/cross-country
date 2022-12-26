module.exports = componentUpperCaseName => ({
  content: `export interface ${componentUpperCaseName}Props {
    foo?: string;
}
`,
  extension: `.types.ts`,
  name: componentUpperCaseName.toLowerCase(),
});
