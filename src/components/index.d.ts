declare module '*.png' {
  const value: any;
  const height: number;
  export = value;
}

declare module '*.svg' {
  const value: any;
  const height: number;
  export = value;
}

declare module '*.css' {
  const content: { [key: string]: any };
  export default content;
}
