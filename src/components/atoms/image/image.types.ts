import * as React from 'react';

export interface ImageProps {
  url?: any;
  width?: number;
  a11y?: string;
  height?: number | string;
  dataTestId?: string;
  customClass?: string;
  customStyle?: any; // possibly add the csstype https://www.npmjs.com/package/csstype - React.CSSPropertiesImageProps ?
}

declare const Image: React.ComponentType<ImageProps>;

export default Image;
