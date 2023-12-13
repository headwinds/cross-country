import React, { Component } from 'react';
import styles from './paragraph.module.css';
import clsx from 'clsx';

const Paragraph = ({ text, children, customClass = '', customStyle = {} }) => (
  <p className={clsx(styles.paragraph, customClass)} style={customStyle}>
    {text || children}
  </p>
);

export default Paragraph;
