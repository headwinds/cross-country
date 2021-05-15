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
  size = 100,
  fill = '#eee',
  cornerColor = '#999',
  customStyle = {},
  type,
  model = {},
  sample = 'shallow-water',
  ...rest
}) => {
  const finalCustomStyle = { ...customStyle, width: size, height: size, backgroundColor: fill };

  return (
    <Column
      customClass={clsx(styles.tile, styles.corners, styles.in)}
      hasChildrenCentered
      customStyle={{ ...finalCustomStyle, backgroundColor: 'tranparent', borderColor: fill }}
    >
      <Column
        customClass={clsx(styles.innerTile, styles[sample])}
        hasChildrenCentered
        customStyle={{ ...finalCustomStyle, width: size - 10, height: size - 10 }}
      ></Column>
      <Row customClass={clsx(styles.corners, styles.top)} customStyle={{ color: cornerColor }} />
      <Row customClass={clsx(styles.corners, styles.bottom)} customStyle={{ color: cornerColor }} />
    </Column>
  );
};

export default Tile;
