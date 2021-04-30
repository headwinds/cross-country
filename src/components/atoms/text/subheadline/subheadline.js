import React, { Component } from 'react';
import styles from './subheadline.scss';
import clsx from 'clsx';

const SubHeadline = ({ text, size = 'small', children, customStyle = {}, customClass = '' }) => {
  const key = `subheadline__${size}`;
  const className = `${styles.subheadline} ${styles[key]}`;
  return (
    <h2 className={clsx(styles.subheadline, customClass)} style={customStyle}>
      {text || children}
    </h2>
  );
};

export default SubHeadline;
