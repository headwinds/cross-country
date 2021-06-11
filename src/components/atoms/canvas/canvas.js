/*
Atom

renders 1 native element
*/

import React, { Component } from 'react';
import styles from './canvas.scss';
import clsx from 'clsx';

const A11yCanvas = ({ children, customClass = '', customStyle = {}, ...rest }) => (
  <div className={clsx(styles.template, customClass)} style={customStyle} {...rest}>
    {children}
  </div>
);

export default A11yCanvas;
