import React, { Component } from 'react';
import { Column, Image, SVG } from '../../../';
import styles from './actor.scss';
import clsx from 'clsx';

const head = {};
const body = {};
const legs = {};
const defaultConfig = { head, body, legs, type: 'humanoid' };

const renderHumanoid = () => {
  return (
    <div>
      <div style={{ backgroundColor: 'gold', width: 40, height: 40 }}></div>
      <div style={{ backgroundColor: 'grey', width: 40, height: 40 }}></div>
      <div style={{ backgroundColor: 'black', width: 40, height: 20 }}></div>
    </div>
  );
};

const Actor = ({ position, customClass = '', customStyle = {}, config = defaultConfig, ...rest }) => {
  const columnCustomClass = clsx(styles.actor, customClass);
  const { type } = config;

  const renderType = () => {
    switch (type) {
      case 'humanoid':
      default:
        return renderHumanoid();
    }
  };

  const finalCustomStyle = position
    ? { ...customStyle, position: 'absolute', top: position.y, left: position.x }
    : { ...customStyle };

  return (
    <Column customClass={columnCustomClass} customStyle={finalCustomStyle} {...rest}>
      {renderType()}
    </Column>
  );
};

export default Actor;
