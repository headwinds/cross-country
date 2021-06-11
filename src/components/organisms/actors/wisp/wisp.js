import React, { Component } from 'react';
import styles from './wisp.scss';
import clsx from 'clsx';

const Wisp = ({ children, customClass = '', customStyle = {}, ...rest }) => (
  <div className={clsx(styles.template, customClass)} style={customStyle} {...rest}>
    {children}
  </div>
);

export default Wisp;
