import type { Preview } from "@storybook/react-vite";

const preview: Preview = {
  parameters: {
    //actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          "Cross Country",
          "components",
          ["atoms", "molecules", "organisms", "templates", "pages"],
        ],
      },
    },
    docs: {
      canvas: {
        height: 500,
      },
    },
  },
};

export default preview;
