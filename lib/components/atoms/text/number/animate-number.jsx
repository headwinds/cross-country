import React, { useState } from 'react';
import { useSpring, animated, SpringValue } from '@react-spring/web';
import styles from './number.module.css';

// https://aleclarson.github.io/react-spring/v9/#Additions
// https://codesandbox.io/s/green-snow-6n8ue?file=/SVGAnimation.js
// https://www.copycat.dev/blog/react-spring/
// twitter.com/eunit99

function AnimateNumber({ from, to, delay, customStyle, locale = 'en-US' }) {
  const [flip, set] = useState(false);
  const { interpolate } = useSpring({
    reset: false,
    reverse: flip,
    from: { interpolate: from },
    interpolate: to,
    delay,
    //onRest: () => set(!flip),
  });

  const formatNumber = n => {
    return Number(n.toFixed(0)).toLocaleString(locale);
  };

  return (
    <animated.h2 className={styles.number} style={customStyle}>
      {interpolate.to(value => formatNumber(value))}
    </animated.h2>
  );
}

export default AnimateNumber;
