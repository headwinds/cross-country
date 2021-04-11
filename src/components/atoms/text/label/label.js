import React, { Component } from 'react';
import styles from '../text.scss';

const Label = ({ text, children, customStyle = {} }) => (
  <p className={styles.label} style={customStyle}>
    {text || children}
  </p>
);

export default Label;
