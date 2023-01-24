import React, { forwardRef, useCallback } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Column, Row, Button } from '../../../';
import styles from './tile.scss';
import clsx from 'clsx';

const defaultModel = { fill: '#eee' };

const InteractiveTile = forwardRef(
  (
    {
      isSelected = false,
      setSelected = null,
      isInteractive = false,
      customClass,
      size = 100,
      cornerColor = '#ddd',
      customStyle = {},
      type,
      model = defaultModel,
      springModel = null,
      //sample = 'light-grey', // shallow-water
      ...rest
    },
    ref
  ) => {
    const { fill, id } = model;
    const finalCustomStyle = { ...customStyle, width: size, height: size, backgroundColor: fill, padding: 0 };

    const handleTileSelected = () => {
      if (isSelected) {
        return setSelected(null);
      }
      return setSelected(model);
    };

    const colorProps = useSpring(springModel);

    return (
      <Column
        customClass={clsx(styles.tile, styles.corners, { [styles.in]: !isSelected, [styles.out]: isSelected })}
        hasChildrenCentered
        customStyle={{ ...finalCustomStyle, backgroundColor: 'tranparent', borderColor: fill }}
        onClick={handleTileSelected}
        ref={ref}
        {...rest}
      >
        {springModel ? (
          <animated.div
            style={{
              ...finalCustomStyle,
              backgroundColor: colorProps.backgroundColor.to(value => value),
              width: size - 4,
              height: size - 4,
            }}
          />
        ) : (
          <Column
            //customClass={clsx(styles.innerTile, styles[sample])}
            hasChildrenCentered
            customStyle={{ ...finalCustomStyle, width: size - 4, height: size - 4 }}
          ></Column>
        )}

        <Row
          customClass={clsx(styles.corners, styles.top)}
          customStyle={{ color: isSelected ? 'black' : cornerColor }}
        />
        <Row
          customClass={clsx(styles.corners, styles.bottom)}
          customStyle={{ color: isSelected ? 'black' : cornerColor }}
        />
      </Column>
    );
  }
);

export default InteractiveTile;
