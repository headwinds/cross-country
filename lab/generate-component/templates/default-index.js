module.exports = (componentUpperCaseName, componentLowerCaseName) => ({
  content: `export { default } from './${componentLowerCaseName}';`,
  extension: `.ts`,
});
