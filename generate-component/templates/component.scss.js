module.exports = componentUpperCaseName => ({
  content: `@import "../../styles.scss";

.${componentUpperCaseName} {
  color: $teal;
}
`,
  extension: `.scss`,
});
