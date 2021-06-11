import React, { Component } from 'react';
import styles from './actor.scss';
import clsx from 'clsx';

const Actor = ({ children, customClass = '', customStyle = {}, ...rest }) => (
  <div className={clsx(styles.actor, customClass)} style={customStyle} {...rest}>
    {children}
  </div>
);

export default Actor;
