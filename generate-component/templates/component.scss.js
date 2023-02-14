module.exports = componentUpperCaseName => ({
  content: `@import "../../styles.css";

.${componentUpperCaseName} {
  color: $teal;
}
`,
  extension: `.css`,
});
