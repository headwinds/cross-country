module.exports = () => ({
  content: `declare module '*.css' {
    const content: { [key: string]: any };
    export = content;
  }`,
  extension: `.d.ts`,
  name: `index`,
});
