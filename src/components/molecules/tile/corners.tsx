import React, { forwardRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import Corner from './corner';

// components
import styles from './tile.module.css';

type CornersProps = {
  size: number;
  isHovered: boolean;
  cornerColor: string;
  hilightCornerColor?: string;
};

const cornerSize = 10;
const animateDistance = 5;

const Corners: React.FC<CornersProps> = ({
  size = 100,
  isHovered = false,
  cornerColor = 'lightblue',
  hilightCornerColor = 'black',
}) => {
  const config = {
    tension: 200, // How much tension is on the spring
    mass: 2, // The mass of the spring
    velocity: 5, // The initial speed of the movement
  };

  const commonStyle = {
    background: 'black',
    width: cornerSize,
    height: cornerSize,
    position: 'absolute',
    display: 'flex',
  };
  const topLeftCornerStyle = { ...commonStyle, background: 'black' };
  const topRightCornerStyle = { ...commonStyle, background: 'blue' };

  const bottomLeftCornerStyle = { ...commonStyle, background: 'green' };
  const bottomRightCornerStyle = {
    ...commonStyle,
    background: 'pink',
  };

  const topLeftProps = useSpring({
    top: isHovered ? -animateDistance : animateDistance,
    left: isHovered ? -animateDistance : animateDistance,
    backgroundColor: isHovered ? hilightCornerColor : cornerColor,
    //config,
  });

  const topRightProps = useSpring({
    top: isHovered ? 0 - animateDistance : animateDistance,
    left: isHovered ? size - cornerSize + animateDistance : size - cornerSize - animateDistance,
    backgroundColor: isHovered ? hilightCornerColor : cornerColor,
    //config,
  });

  const bottomLeftProps = useSpring({
    top: isHovered ? size - cornerSize + animateDistance : size - cornerSize - animateDistance,
    left: isHovered ? 0 - animateDistance : 0 + animateDistance,
    backgroundColor: isHovered ? hilightCornerColor : cornerColor,
    //config,
  });

  const bottomRightProps = useSpring({
    top: isHovered ? size - cornerSize + animateDistance : size - cornerSize - animateDistance,
    left: isHovered ? size - cornerSize + animateDistance : size - cornerSize - animateDistance,
    backgroundColor: isHovered ? hilightCornerColor : cornerColor,
    //config,
  });

  /*
  const [topRightProps, setTopRight, stopTopRight] = useSpring(() => ({
    top: -20,
    left: size + 20,
    from: { top: 0, left: size },
    config,
  }));

  const [bottomLeftProps, setBottomLeft, stopBottomLeft] = useSpring(() => ({
    top: size + 20,
    left: -20,
    from: { top: size, left: 0 },
    config,
  }));

  const [bottomRightProps, setBottomRight, stopBottomRight] = useSpring(() => ({
    top: size + 20,
    left: size + 20,
    from: { top: size, left: size },
    config,
  }));

  const cornerSize = 10;

  const commonStyle = {
    background: 'black',
    width: cornerSize,
    height: cornerSize,
    position: 'absolute',
    display: 'flex',
  };
  const topLeftCornerStyle = { ...commonStyle, background: 'black' };
  const topRightCornerStyle = { ...commonStyle, background: 'blue' };

  const bottomLeftCornerStyle = { ...commonStyle, background: 'green' };
  const bottomRightCornerStyle = {
    ...commonStyle,
    background: 'pink',
  };

  return (
    <div>
      <animated.div className={styles.corner} style={{ ...topLeftCornerStyle, ...topLeftProps }} />
      <animated.div className={styles.corner} style={{ ...topRightCornerStyle, ...topRightProps }} />
      <animated.div className={styles.corner} style={{ ...bottomLeftCornerStyle, ...bottomLeftProps }} />
      <animated.div className={styles.corner} style={{ ...bottomRightCornerStyle, ...bottomRightProps }} />
    </div>
  );
  */
  return (
    <>
      <animated.div className={styles.corner} style={{ ...topLeftCornerStyle, ...topLeftProps }} />
      <animated.div className={styles.corner} style={{ ...topRightCornerStyle, ...topRightProps }} />
      <animated.div className={styles.corner} style={{ ...bottomLeftCornerStyle, ...bottomLeftProps }} />
      <animated.div className={styles.corner} style={{ ...bottomRightCornerStyle, ...bottomRightProps }} />
    </>
  );
};

export default Corners;

// props
// https://www.sabinthedev.com/blog/getting-animated-with-react-spring-2-the-usespring-hook
