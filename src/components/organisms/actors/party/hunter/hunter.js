import React, { Component } from 'react';
import { Column } from '../../../../';
import styles from './hunter.scss';
import clsx from 'clsx';

const Hunter = ({ children, customClass = '', model: { customStyle = {} }, ...rest }) => {
  return (
    <div className={clsx(styles.hunter, customClass)} style={customStyle} {...rest}>
      {children}
    </div>
  );
};

export default Hunter;
