import React, { Component } from 'react';
import { Column, Actor } from '../../../../';
import styles from './warrior.scss';
import clsx from 'clsx';

// pre-configured character
const head = { color: 'black' };
const body = { color: 'grey' };
const legs = { color: 'red' };
const defaultConfig = { head, body, legs, type: 'humanoid' };
const defaultModel = { id: 1, type: 'warrior', customStyle: {}, config: defaultConfig };

const Warrior = ({ position, customClass = '', model = defaultModel, tileSize }) => {
  const { config, customStyle } = model;
  const validConfig = config ?? defaultConfig;
  return (
    <Actor
      config={validConfig}
      position={position}
      customClass={customClass}
      customStyle={customStyle}
      tileSize={tileSize}
    />
  );
};

export default Warrior;
