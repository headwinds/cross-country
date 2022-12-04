export const getWindow = () => {
  if (typeof window === 'undefined') {
    /* we're on the server */
    return null;
  }
  return window ? window : null;
};

export const getNavigator = () => {
  if (typeof navigator === 'undefined') {
    /* we're on the server */
    return null;
  }
  return navigator ? navigator : null;
};

export const getDocument = () => {
  if (typeof document === 'undefined') {
    /* we're on the server */
    return null;
  }
  return document ? document : null;
};
