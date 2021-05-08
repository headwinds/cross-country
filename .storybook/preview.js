import '!style-loader!css-loader!sass-loader!../src/styles/storybook-styles.scss';
export const parameters = {
  options: {
    storySort: {
      order: ['menu', ['intro', 'atoms', 'molecules', 'organisms', 'pages']],
    },
  },
};
