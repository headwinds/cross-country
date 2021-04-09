import React, { Component } from 'react';
import styles from './paragraph.scss';

const Paragraph = ({ text, children, customStyle = {} }) => (
  <p className={styles.paragraph} style={customStyle}>
    {text || children}
  </p>
);

export default Paragraph;
