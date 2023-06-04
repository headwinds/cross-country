export const parameters = {
  options: {
    storySort: {
      order: ['Cross Country', 'design system', ['atoms', 'molecules', 'organisms', 'templates', 'pages']],
    },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
