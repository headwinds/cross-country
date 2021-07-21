import React from 'react';
// components
import { Column, Row } from '../../';
import styles from './tile.scss';
import clsx from 'clsx';
// types of tiles
import InteractiveTile from './tile-interactive';
import ColorTile from './tile-color';

/*
Tile
A tile could be an image, svg, canvas or composed other tiles.
Color mixing challenge - what is color is grass, dirt, the sky, etc to you?
*/

const Tile = props => {
  const { type } = props;
  switch (type) {
    case 'interactive':
    default:
      return <InteractiveTile {...props} />;
  }
};

export default Tile;
