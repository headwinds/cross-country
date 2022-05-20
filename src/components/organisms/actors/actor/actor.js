import React, { Component } from 'react';
import { Column, Image, SVG } from '../../../';
import styles from './actor.scss';
import clsx from 'clsx';

const head = { color: 'purple' };
const body = { color: 'green' };
const legs = { color: 'cornflowerblue' };
const defaultConfig = { head, body, legs, type: 'humanoid', tileSize: 30 };

// the actor should be relative to the tile size so that they're larger than the tile

const renderHumanoid = (config, tileSize) => {
  const { head, body, legs } = config;

  const third = Math.floor(tileSize / 3) - 4;
  const validThird = String(third) === 'NaN' ? 0 : third;

  return (
    <div name="doll">
      <div name="doll head" style={{ backgroundColor: head.color, width: 40, height: validThird }}></div>
      <div name="doll body" style={{ backgroundColor: body.color, width: 40, height: validThird }}></div>
      <div name="doll legs" style={{ backgroundColor: legs.color, width: 40, height: validThird - 10 }}></div>
    </div>
  );
};

const Actor = ({ position, customClass = '', customStyle = {}, config = defaultConfig, tileSize }) => {
  const columnCustomClass = clsx(styles.actor, customClass);
  const { type } = config;

  const renderType = () => {
    switch (type) {
      case 'humanoid':
      default:
        return renderHumanoid(config, tileSize);
    }
  };

  const finalCustomStyle = position
    ? { ...customStyle, position: 'absolute', top: position.y, left: position.x }
    : { ...customStyle };

  return (
    <Column
      customClass={styles.actor}
      customStyle={{ backgroundColor: 'red', opacity: 0.2, width: tileSize, height: tileSize, alignItems: 'center' }}
      name="actor tile"
    >
      <Column customClass={columnCustomClass} customStyle={finalCustomStyle} name="actor">
        {renderType()}
      </Column>
    </Column>
  );
};

export default Actor;
