import React, { Component } from 'react';
import styles from './headline.scss';
import clsx from 'clsx';

const Headline = ({ color = '', text, children, customStyle = {}, customClass = '', ...rest }) => (
  <h1 {...rest} className={clsx(styles.headline, customClass)} style={{ color, ...customStyle }}>
    {text || children}
  </h1>
);

export default Headline;
