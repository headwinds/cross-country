/*
module.exports = {
  testURL: 'http://localhost:6006/',
  testRegex: '((\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['scss', 'ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.scss$': 'jest-transform-scss',
  },
};
*/
module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
  setupFiles: ['react-app-polyfill/jsdom', '<rootDir>/config/jest/client.js'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testMatch: ['<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}', '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}'],
  testEnvironment: 'jest-environment-jsdom-fourteen',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/css-transform.js',
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '<rootDir>/config/jest/file-transform.js',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
    '/node_modules/(?!intl-messageformat|intl-messageformat-parser).+\\.js$',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  modulePaths: ['src'],
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
    '\\.(css|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg)$': '<rootDir>/config/jest/file-transform.js',
    '^@root(.*)$': '<rootDir>/src$1',
    '^Components(.*)$': '<rootDir>/src/components$1',
    '^Pages(.*)$': '<rootDir>/src/pages$1',
    '^Context(.*)$': '<rootDir>/src/context$1',
    '^Data(.*)$': '<rootDir>/src/data$1',
    '^Utils(.*)$': '<rootDir>/src/utils$1',
    '^I18n(.*)$': '<rootDir>/src/i18n$1',
    '^GraphQL(.*)$': '<rootDir>/src/graphql$1',
    '^Styles(.*)$': '<rootDir>/src/styles/styles.scss',
    '^Mocks(.*)$': '<rootDir>/src/__mocks__$1',
    '^Colors(.*)$': '<rootDir>/src/styles/colors.scss',
    '^Shared(.*)$': '<rootDir>/src/components/shared',
  },
  moduleFileExtensions: ['web.js', 'js', 'web.ts', 'ts', 'web.tsx', 'tsx', 'json', 'web.jsx', 'jsx', 'node'],
  moduleDirectories: ['node_modules', '<rootDir>', '<rootDir>/src/utils'],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
};
