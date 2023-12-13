import * as React from 'react';

export interface CrossCountryImageProps {
  url?: any;
  width?: number;
  a11y?: string;
  height?: number | string;
  dataTestId?: string;
  customClass?: string;
  customStyle?: any; // possibly add the csstype https://www.npmjs.com/package/csstype - React.CSSPropertiesImageProps ?
}

declare const Image: React.ComponentType<CrossCountryImageProps>;

export default Image;
