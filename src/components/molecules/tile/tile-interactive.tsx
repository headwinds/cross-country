import React, { forwardRef, useCallback, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Column, Row, Button, Paragraph, KeyValuePairs } from '../../..';
import Corners from './corners';
import styles from './tile.module.css';
import clsx from 'clsx';

const defaultModel = { fill: '#eee', value: 0, id: 0 };

const SUBSTRACT_SIZE_MODIFIER = 5;

// a tile should be empty and we should nest the Actor
const Actor = ({ value = 'Farmer' }) => {
  return <Paragraph>{value}</Paragraph>;
};

const InteractiveTile = forwardRef(
  (
    {
      isSelected = false,
      setSelected = null,
      isInteractive = true,
      customClass,
      size = 100,
      cornerColor = '#ddd',
      customStyle = {},
      type,
      model = defaultModel,
      springModel = null,
      borderRadius = 10,
      children,
      //sample = 'light-grey', // shallow-water
      ...rest
    },
    ref
  ) => {
    const [isHovered, toggleHovered] = useState(false);
    const { fill, id } = model;
    const finalCustomStyle = { ...customStyle, width: size, height: size, backgroundColor: fill, padding: 0 };
    const { value } = model;
    const handleTileSelected = () => {
      if (isSelected) {
        return setSelected(null);
      }
      return setSelected(model);
    };

    const colorProps = useSpring(springModel);

    const onMouseEnter = () => {
      console.log('Tile onMouseEnter');
      toggleHovered(true);
    };

    const onMouseLeave = () => {
      console.log('Tile onMouseLeave');
      toggleHovered(false);
    };

    const keyValues = [
      { id: 0, key: 'name', value: 'water' },
      { id: 1, key: 'movement cost', value: '3' },
    ];

    return (
      <Column
        customClass={clsx(
          styles.tile,
          styles.interactive,
          { [styles.in]: !isSelected, [styles.out]: isSelected },
          customClass
        )}
        hasChildrenCentered
        customStyle={{ ...finalCustomStyle, backgroundColor: 'tranparent', borderColor: fill }}
        onClick={handleTileSelected}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref}
        {...rest}
      >
        {springModel ? (
          <animated.div
            style={{
              ...finalCustomStyle,
              backgroundColor: colorProps.backgroundColor.to(value => value),
              width: size - SUBSTRACT_SIZE_MODIFIER,
              height: size - SUBSTRACT_SIZE_MODIFIER,
            }}
          />
        ) : (
          <Column
            //customClass={clsx(styles.innerTile, styles[sample])}
            hasChildrenCentered
            customStyle={{
              ...finalCustomStyle,
              width: size - SUBSTRACT_SIZE_MODIFIER,
              height: size - SUBSTRACT_SIZE_MODIFIER,
              borderRadius,
              backgroundColor: fill,
            }}
          >
            {children}
          </Column>
        )}

        {/* CORNERS */}
        <Corners size={100} isHovered={isHovered} cornerColor={model.fill} />
        {/*
        <Column>
          <KeyValuePairs keyValues={keyValues} />
        </Column>*/}
      </Column>
    );
  }
);

export default InteractiveTile;
