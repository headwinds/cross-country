import React from 'react';
import Column from '../../atoms/column/column';
import Row from '../../atoms/row/row';
import styles from './tile.scss';
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
        return <Column customClass={clsx(styles.tile, styles.bttn, styles.grass)} customStyle={finalCustomStyle} />;
    }
  }

  return (
    <Column customClass={clsx(styles.tile, styles.bttn, styles.out)} hasChildrenCentered>
      <Column customClass={clsx(styles.innerTile)} hasChildrenCentered></Column>
      <Row customClass={clsx(styles.corners, styles.top)} />
      <Row customClass={clsx(styles.corners, styles.bottom)} />
    </Column>
  );
};

export default Tile;
