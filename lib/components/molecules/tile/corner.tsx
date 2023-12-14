import React, { forwardRef } from 'react';
import { useSpring, animated } from '@react-spring/web';

// components
import styles from './tile.module.css';

const Corner = () => {
  return <div className={styles.corner} style={{ background: 'black', width: 20, height: 5 }}></div>;
};

export default Corner;
