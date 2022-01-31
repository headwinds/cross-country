import React, { Component } from 'react';
import { Column } from '../../../';
import styles from './actor.scss';
import clsx from 'clsx';

const head = {};
const body = {};
const legs = {};
const defaultConfig = { head, body, legs, type: 'humanoid' };

const renderHumanoid = () => {
  return (
    <>
      <div>head</div>
      <div>body</div>
      <div>legs</div>
    </>
  );
};

const Actor = ({ customClass = '', customStyle = {}, config = defaultConfig, ...rest }) => {
  const columnCustomClass = clsx(styles.actor, customClass);
  const { type } = config;

  const renderType = () => {
    switch (type) {
      case 'humanoid':
      default:
        return renderHumanoid();
    }
  };

  return (
    <Column customClass={columnCustomClass} customStyle={customStyle} {...rest}>
      {renderType()}
    </Column>
  );
};

export default Actor;
