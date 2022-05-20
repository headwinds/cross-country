import React, { Component } from 'react';
import { Column, Actor } from '../../../../';
import styles from './hunter.scss';
import clsx from 'clsx';

// pre-configured character
const head = { color: 'gold' };
const body = { color: 'grey' };
const legs = { color: 'black' };
const defaultConfig = { head, body, legs, type: 'humanoid' };
const defaultModel = { id: 0, type: 'hunter', customStyle: {}, config: defaultConfig };

const Hunter = ({ position, customClass = '', model = defaultModel, tileSize }) => {
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

export default Hunter;
