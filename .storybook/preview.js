export const parameters = {
  options: {
    storySort: {
      order: ['Cross Country', 'Menu', ['Atoms', 'Molecules', 'Organisms']],
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
