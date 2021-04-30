/*
Atom

renders 1 native element
*/

import React, { Component } from 'react';
import styles from './template.scss';
import clsx from 'clsx';

const Template = ({ children, customClass = '', customStyle = {}, ...rest }) => (
  <div className={clsx(styles.template, customClass)} style={customStyle} {...rest}>
    {children}
  </div>
);

export default Template;
