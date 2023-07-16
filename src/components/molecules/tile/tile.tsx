import React, { forwardRef } from 'react';
import { useSpring, animated } from '@react-spring/web';

// components
import { Column, Row } from '../..';
import styles from './tile.module.css';
import InteractiveTile from './tile-interactive';

import type { TileType, InteractiveTileType } from './types';

const Tile = forwardRef((props: TileType | InteractiveTileType, ref) => {
  const { type } = props;
  switch (type) {
    case 'interactive':
    default:
      return <InteractiveTile {...props} ref={ref} />;
  }
});

export default Tile;
