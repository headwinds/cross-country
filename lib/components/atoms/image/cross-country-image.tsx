import React, { useState } from 'react';
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
  onNoImageFoundCallback = () => {},
}: CrossCountryImageProps) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
    onNoImageFoundCallback();
  };

  return (
    <div>
      {!imageError ? (
        <img
          data-testid={dataTestId}
          className={clsx(styles.image, customClass)}
          style={customStyle}
          src={url}
          width={width}
          height={height}
          alt={a11y}
          onError={handleImageError}
        />
      ) : null}
    </div>
  );
};

export default CrossCountryImage;
  

