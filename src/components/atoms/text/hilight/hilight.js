import React, { Component } from 'react';
import styles from './hilight.scss';
import clsx from 'clsx';

const Hilight = ({ text, children, customClass = '', customStyle = {}, ...rest }) => (
  <span className={clsx(styles.span, customClass)} style={customStyle} {...rest}>
    {text || children}
  </span>
);

export default Hilight;
