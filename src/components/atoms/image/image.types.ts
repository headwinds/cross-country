import * as React from 'react';

export interface ImageProps {
  url: string;
  width?: number;
  a11y?: string;
  height?: number | string;
  dataTestId?: string;
  customClass?: string;
  customStyle?: React.CSSPropertiesImageProps; // possibly add the csstype https://www.npmjs.com/package/csstype - React.CSSPropertiesImageProps ?
}

declare const Image: React.ComponentType<ImageProps>;

export default Image;
