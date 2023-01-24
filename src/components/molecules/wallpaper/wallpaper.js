import React, { useEffect } from 'react';
import Column from '../../atoms/column/column';
import styles from './wallpaper.scss';
import { useSpring, animated, SpringValue } from '@react-spring/web';
import clsx from 'clsx';

const AnimFeTurbulence = animated('feTurbulence');
const AnimFilter = animated('filter');
const AnimFeFloor = animated('feFlood');

const Wallpaper = ({
  backgroundColor = '',
  rgba = `rgba(0,128,128,1)`,
  customClass = '',
  customStyle = {},
  hasNoise = false,
  hasGradient = false,
  springModel = null,
  ...rest
}) => {
  const from = 0;
  const to = 1000;
  const delay = 0;
  const locale = 'en-US';

  const { numOctaves, baseFrequency, opacity } = useSpring({
    reset: true,
    reverse: true,
    from: { numOctaves: 0, baseFrequency: 0.25, opacity: 0 },
    to: { numOctaves: 25, baseFrequency: 0.65, opacity: 1 },
    delay,
    config: { mass: 10, tension: 300, friction: 50, precision: 0.0001, extrapolate: 'clamp' },
  });

  const MAX_OCTAVES = 50;

  const formatOctavesNumber = n => {
    const convertNum = Number(n.toFixed(0));

    return convertNum > MAX_OCTAVES ? convertNum : MAX_OCTAVES;
  };

  const renderNoise = () => {
    return (
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        id="noise"
        style={{ width: '100vw', height: '100vh' }}
      >
        <AnimFilter id="noiseFilter" style={{ opacity: opacity.to(value => value) }}>
          <AnimFeFloor flood-color="seagreen" flood-opacity="0.2" x="0" y="0" width="200" height="200" />
          <AnimFeTurbulence
            type="fractalNoise"
            baseFrequency={baseFrequency.to(value => value)}
            numOctaves={numOctaves.to(value => formatOctavesNumber(value))}
            stitchTiles="stitch"
          />
        </AnimFilter>
        <rect width="100vw" height="100vh" filter="url(#noiseFilter)" />
      </svg>
    );
  };

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

  const getFinalStyle = () => {
    if (hasNoise && hasGradient) {
      return { ...customStyle, ...customNoiseStyle, ...customGradientStyle };
    } else if (hasNoise && !hasGradient) {
      return { ...customStyle, ...customNoiseStyle };
    } else if (!hasNoise && hasGradient) {
      return { ...customStyle, ...customGradientStyle };
    } else {
      return { ...customStyle };
    }
  };

  const springApi = useSpring(springModel);

  const finalCustomStyle = getFinalStyle();

  const render = () => {
    if (springModel) {
      return (
        <animated.div
          {...rest}
          className={clsx(styles.wallpaper, customClass)}
          style={{ ...finalCustomStyle, ...springApi }}
        >
          {hasNoise ? renderNoise() : null}
        </animated.div>
      );
    } else {
      return (
        <Column
          {...rest}
          customClass={clsx(styles.wallpaper, customClass)}
          customStyle={{ backgroundColor, ...finalCustomStyle }}
        >
          {hasNoise ? renderNoise() : null}
        </Column>
      );
    }
  };

  return render();
};

export default Wallpaper;
