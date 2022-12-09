module.exports = componentName => ({
  content: `@import "../__common__/styles/styles.module.scss";

.fooBar {
  @include font-defaults;

  color: $harvey-green;
}
`,
  extension: `.module.scss`,
});
