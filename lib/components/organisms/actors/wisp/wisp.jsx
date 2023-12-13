import React, { Component } from 'react';
import styles from './wisp.module.css';
import clsx from 'clsx';

const Wisp = ({ children, customClass = '', ...rest }) => (
  <div className={clsx(styles.wisp, customClass)} {...rest}>
    {children}
  </div>
);

export default Wisp;
