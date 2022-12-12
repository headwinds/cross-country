module.exports = componentUpperCaseName => ({
  content: `export { default } from './${componentUpperCaseName.toLowerCase()}';`,
  extension: `.ts`,
});
