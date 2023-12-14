import React from 'react';
import styles from './bold.module.css';
import clsx from 'clsx';

const Bold = ({ children, customClass = '', customStyle = {}, ...rest }) => (
  <b {...rest} className={clsx(styles.bold, customClass)} style={customStyle}>
    {children}
  </b>
);

export default Bold;
