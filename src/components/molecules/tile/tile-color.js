import React from 'react';
import Column from '../../atoms/column/column';
import Row from '../../atoms/row/row';
import styles from './tile.scss';
import clsx from 'clsx';

const ColorTile = ({
  isSelected = false,
  isInteractive = false,
  customClass,
  size = 100,
  fill = '#eee',
  customStyle = {},
  type,
  model = {},
  sample = 'shallow-water',
  ...rest
}) => {
  const finalCustomStyle = { ...customStyle, width: size, height: size, backgroundColor: fill };

  return (
    <Column
      customClass={clsx(styles.innerTile, styles[sample])}
      hasChildrenCentered
      customStyle={{ ...finalCustomStyle, width: size - 4, height: size - 4 }}
      {...rest}
    ></Column>
  );
};

export default ColorTile;
