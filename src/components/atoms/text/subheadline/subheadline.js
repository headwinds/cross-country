import React from 'react';
import styles from './subheadline.scss';
import clsx from 'clsx';

const SubHeadline = ({ text, color = '', size = 'small', children, customStyle = {}, customClass = '' }) => {
  const key = `subheadline__${size}`;
  const className = `${styles.subheadline} ${styles[key]}`;
  return (
    <h2 className={clsx(className, customClass)} style={{ color, ...customStyle }}>
      {text || children}
    </h2>
  );
};

export default SubHeadline;
