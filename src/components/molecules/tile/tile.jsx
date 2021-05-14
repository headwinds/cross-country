import React from 'react';
import Column from '../../atoms/column/column';
import styles from './tile.module.scss';
import clsx from 'clsx';

/*
Tile

A tile could be an image, svg, canvas or composed other tiles.

Color mixing challenge - what is color is grass, dirt, the sky, etc to you?

*/

const Tile = ({
  isSelected = false,
  isInteractive = false,
  customClass,
  size,
  fill,
  customStyle = {},
  type,
  model = {},
  ...rest
}) => {
  const finalCustomStyle = size ? { ...customStyle, width: size, height: size, backgroundColor: fill } : customStyle;

  if (type) {
    switch (type) {
      case 'grass':
      default:
        return <Column customClass={clsx(styles.tile, styles.grass)} customStyle={finalCustomStyle} />;
    }
  }

  return <Column customClass={clsx(styles.tile, styles.dirt)} customStyle={finalCustomStyle}></Column>;
};

export default Tile;
