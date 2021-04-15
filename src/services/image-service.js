import { createApi } from 'unsplash-js';

export const getUnsplashPhoto = MY_ACCESS_KEY => {
  const unsplash = createApi({ accessKey: MY_ACCESS_KEY });

  // non-feed example
  return unsplash.photos.get({ photoId: 'pFqrYbhIAXs' });
};
