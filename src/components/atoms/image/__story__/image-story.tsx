import * as React from 'react';
import CrossCountryImage from '../cross-country-image';
import dom2d from './dom2d.png';

const ImageStory = () => {
  return <CrossCountryImage a11y={'dom2d notebook sketch'} url={dom2d} width={600} />;
};

export default ImageStory;
