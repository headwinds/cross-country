module.exports = () => ({
  content: `declare module '*.scss' {
    const content: { [key: string]: any };
    export = content;
  }`,
  extension: `.d.ts`,
  name: `index`,
});
