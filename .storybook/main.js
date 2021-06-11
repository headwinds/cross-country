const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.@(ts|js|mdx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y'],
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
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
              // localIdentName: '[sha1:hash:hex:4]',
              context: path.resolve(__dirname, 'src'),
              hashPrefix: 'my-custom-hash',
            },
          },
        },
        require.resolve('sass-loader'),
      ],
    });

    return config;
  },
};
