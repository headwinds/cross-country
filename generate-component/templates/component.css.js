// content: `@import "../../styles.css"; could use this to import fonts?!
module.exports = componentUpperCaseName => ({
  content: `

.${componentUpperCaseName} {
  color: $teal;
}
`,
  extension: `.module.css`,
});
