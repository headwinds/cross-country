import React, { Component } from 'react';
import styles from './hilight.module.css';
import clsx from 'clsx';

const Hilight = ({ text, children, customClass = '', customStyle = {}, hilightColor, ...rest }) => {
  const newStyle = { ...customStyle, backgroudColor: hilightColor };
  console.log('Hilight hilightColor: ', newStyle);
  return (
    <span className={clsx(styles.span, customClass)} style={customStyle} {...rest}>
      {text || children}
    </span>
  );
};

export default Hilight;
