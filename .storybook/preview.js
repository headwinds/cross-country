import '!style-loader!css-loader!sass-loader!../src/styles/storybook-styles.scss';
import "../src/index.css";
export const parameters = {
  options: {
    storySort: {
      order: ['menu', ['intro', 'atoms', 'molecules', 'organisms', 'pages', 'micro']],
    },
  },
  xstate: true,
};
