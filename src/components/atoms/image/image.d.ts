import * as React from 'react';

export interface ImageProps {
  url: string, 
  width: number,
  a11y: string
}

declare const Image: React.ComponentType<ImageProps>;

export default Image;