import React, { Component } from 'react';
import styles from './headline.scss';
import clsx from 'clsx';

const Headline = ({ text, children, customStyle = {}, customClass = '', ...rest }) => (
  <h1 {...rest} className={clsx(styles.headline, customClass)} style={customStyle}>
    {text || children}
  </h1>
);

export default Headline;
