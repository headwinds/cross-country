import React from 'react';
import { Column, Row, Button } from '../../';
import styles from './tile.scss';
import clsx from 'clsx';

const InteractiveTile = ({
  isSelected = false,
  setSelected = null,
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

  const handleTileSelected = () => {
    if (isSelected) {
      return setSelected(null);
    }
    return setSelected(model);
  };

  return (
    <Column
      customClass={clsx(styles.tile, styles.corners, { [styles.in]: !isSelected, [styles.out]: isSelected })}
      hasChildrenCentered
      customStyle={{ ...finalCustomStyle, backgroundColor: 'tranparent', borderColor: fill }}
      {...rest}
      onClick={handleTileSelected}
    >
      <Column
        customClass={clsx(styles.innerTile, styles[sample])}
        hasChildrenCentered
        customStyle={{ ...finalCustomStyle, width: size - 4, height: size - 4 }}
      ></Column>
      <Row customClass={clsx(styles.corners, styles.top)} customStyle={{ color: isSelected ? 'black' : cornerColor }} />
      <Row
        customClass={clsx(styles.corners, styles.bottom)}
        customStyle={{ color: isSelected ? 'black' : cornerColor }}
      />
    </Column>
  );
};

export default InteractiveTile;
