export const getWindow = () => {
  if (typeof window === 'undefined') {
    /* we're on the server */
    return null;
  }
  return window;
};

export const getNavigator = () => {
  if (typeof navigator === 'undefined') {
    /* we're on the server */
    return null;
  }
  return navigator;
};

export const getDocument = () => {
  if (typeof document === 'undefined') {
    /* we're on the server */
    return null;
  }
  return document;
};
