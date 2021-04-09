import React, { Component } from 'react';
import styles from './subheadline.scss';

const SubHeadline = ({ text, size = 'small', children }) => {
  const key = `subheadline__${size}`;
  const className = `${styles.subheadline} ${styles[key]}`;
  return <h2 className={className}>{text || children}</h2>;
};

export default SubHeadline;
