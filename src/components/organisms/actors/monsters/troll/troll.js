import React, { Component } from 'react';
import { Column, Actor } from '../../../../';
import styles from './troll.scss';
import clsx from 'clsx';

// pre-configured character
const head = { color: 'white' };
const body = { color: 'white' };
const legs = { color: 'white' };
const defaultConfig = { head, body, legs, type: 'humanoid' };
const defaultModel = { id: 2, type: 'troll', customStyle: {}, config: defaultConfig };

const Troll = ({ position, customClass = '', model = defaultModel, tileSize }) => {
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

export default Troll;
