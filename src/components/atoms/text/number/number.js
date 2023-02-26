import React from 'react';
import styles from './number.css';
import clsx from 'clsx';

const Number = ({ text, color = '', size = 'small', children, customStyle = {}, customClass = '' }) => {
  return (
    <p className={clsx(styles.number, customClass)} style={{ color, ...customStyle }}>
      {text || children}
    </p>
  );
};

export default Number;
