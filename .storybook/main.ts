import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../lib/**/*.mdx", "../lib/**/*.stories.@(ts|tsx|mdx)"],
  staticDirs: ["../public"],

  addons: [
    "@storybook/addon-links",
    {
      name: "@storybook/addon-docs",
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            providerImportSource: "@mdx-js/react",
            remarkPlugins: [
              // @ts-ignore
              (await import('remark-gfm')).default,
            ],
          },
        },
      },
    },
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  docs: {
    autodocs: true,
  },

  experimental_indexers: async (existingIndexers) => {
    // Add or modify indexers here
    return existingIndexers;
  },

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },

  async viteFinal(config) {
    // Ensure proper MDX resolution
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          // Fix pnpm + Storybook 10 MDX resolution issue
          "@storybook/addon-docs/mdx-react-shim": "@mdx-js/react",
          "@storybook/blocks": "@storybook/addon-docs/blocks",
        },
      },
      optimizeDeps: {
        ...config.optimizeDeps,
        include: [
          ...(config.optimizeDeps?.include || []),
          "@mdx-js/react",
          "@storybook/addon-docs/blocks",
        ],
      },
    };
  },
};

export default config;
