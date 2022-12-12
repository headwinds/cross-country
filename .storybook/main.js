const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.@(ts|tsx|js|mdx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y', 'storybook-xstate-addon/preset'],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      loaders: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: {
            importLoaders: 1,
            modules: {
              mode: 'local',
              localIdentName: '[local]--[hash:base64:5]',
              // localIdentName: '[sha1:hash:hex:4]',
              context: path.resolve(__dirname, 'src'),
              hashPrefix: 'my-custom-hash',
            },
          },
        },
        require.resolve('sass-loader'),
      ],
    });

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
      },
    });
    config.resolve.extensions.push('.ts', '.tsx');

    return config;
  },
};
