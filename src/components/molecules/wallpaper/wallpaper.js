import React from 'react';
import Column from '../../atoms/column/column';
import styles from './wallpaper.scss';
import clsx from 'clsx';

const Wallpaper = ({ backgroundColor = '', customClass = '', customStyle = {}, ...rest }) => {
  const renderGradient = () => {};

  const renderNoise = () => {
    return (
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" id="noise">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        </filter>

        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    );
  };

  const renderWallpaper = ({ hasNoise = false, rgba = `rgba(0,128,128,1)` }) => {
    // noise
    const customNoiseStyle = {
      padding: 0,
      margin: 0,
      filter: 'contrast(130%) brightness(1200%)',
      background: `linear-gradient(40deg, ${rgba}, rgba(0,0,0,0.4)), url(#noise)`,
    };

    // gradient
    const customGradientStyle = {
      padding: 0,
      margin: 0,
      background:
        'linear-gradient(0deg, rgba(0,241,255,1), rgba(0,0,0,0)), linear-gradient(210deg, rgba(255,0,0,1), rgba(255,255,0,0))',
    };

    return (
      <Column
        {...rest}
        customClass={clsx(styles.wallpaper, customClass)}
        customStyle={{ backgroundColor, ...customStyle }}
      >
        {hasNoise ? renderNoise() : null()}
        {hasGradient ? renderGradient() : null()}
      </Column>
    );
  };

  return renderWallpaper();
};

export default Wallpaper;
