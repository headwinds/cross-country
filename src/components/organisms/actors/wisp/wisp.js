import React, { Component } from 'react';
import styles from './wisp.scss';
import clsx from 'clsx';

const Wisp = ({ children, customClass = '', model: { customStyle = {} }, ...rest }) => (
  <div className={clsx(styles.wisp, customClass)} style={customStyle} {...rest}>
    {children}
  </div>
);

export default Wisp;
