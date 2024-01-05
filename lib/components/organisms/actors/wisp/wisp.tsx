import React, { Component } from 'react';
import styles from './wisp.module.css';
import Actor from '../actor/';
import clsx from 'clsx';


const defaultModel = {
  id: 0,
  type: 'one',
  position: { x: 0, y: 0, z: 0 },
  customSkinStyle: { backgroundColor: '#e8e8e8' },
  config: null,
  customClass: '',
};

const Wisp = ({ customClass = '', customSkinStyle = {}, model = defaultModel, tileSize = 40 }) => (
  <Actor
      type={model.type}
      config={model.config}
      position={model.position}
      customClass={customClass}
      customSkinStyle={{ ...model.customSkinStyle, ...customSkinStyle }}
      tileSize={tileSize}
    />
);

export default Wisp;
