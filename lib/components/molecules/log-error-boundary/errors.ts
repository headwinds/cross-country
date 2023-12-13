// @ts-nocheck
const ANALYTICS = {
  EXAMPLE: 'example',
};

const initialDestinations = [ANALYTICS.EXAMPLE];
const logErrorAppDynamics = (url, message, line, stack) => {};

export const logError = (message, line, stack = '', url = '', destinations = initialDestinations) => {
  destinations.forEach(destination => {
    switch (destination) {
      case ANALYTICS.EXAMPLE:
        logErrorAppDynamics(url, message, line, stack);
        break;
      default:
        return console.warn('logging a message to no service -- see error.js'); // eslint-disable-line no-console
    }
  });
};
