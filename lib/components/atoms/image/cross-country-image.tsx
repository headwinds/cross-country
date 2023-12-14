import React from 'react';
import clsx from 'clsx';
import styles from './cross-country-image.module.css';
import { CrossCountryImageProps } from './cross-country-image.types';

const CrossCountryImage = ({
  url,
  width,
  a11y,
  height = 'auto',
  customClass = '',
  customStyle = {},
  dataTestId = 'image',
}: CrossCountryImageProps) => {
  const img = new Image(); // careful about Image being a reserved word
  img.src = url;

  return (
    <div>
      <img
        data-testid={dataTestId}
        className={(clsx(styles.image), customClass)}
        style={customStyle}
        src={url}
        width={width}
        height={height}
        alt={a11y}
      />
    </div>
  );
};

export default CrossCountryImage;
