import React, { forwardRef } from 'react';
import { useSpring, animated } from '@react-spring/web';

// components
import { Column, Row } from '../..';
import styles from './tile.module.css';
import InteractiveTile from './tile-interactive';

type TileProps = {
  type: string;
};

const Tile: React.FC<TileProps> = forwardRef((props, ref) => {
  const { type } = props;
  switch (type) {
    case 'interactive':
    default:
      return <InteractiveTile {...props} ref={ref} />;
  }
});

export default Tile;
