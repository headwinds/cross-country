import React, { Component } from 'react';
import styles from './hunter.scss';
import clsx from 'clsx';

const Hunter = ({ children, customClass = '', customStyle = {}, ...rest }) => (
  <div className={clsx(styles.template, customClass)} style={customStyle} {...rest}>
    {children}
  </div>
);

export default Hunter;
