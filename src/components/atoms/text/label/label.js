import React from 'react';
import styles from './label.scss';
import clsx from 'clsx';

const Label = ({ children, forId, customClass = '', customStyle = {}, ...rest }) => (
  <label {...rest} className={clsx(styles.label, customClass)} htmlFor={forId} style={customStyle}>
    {children}
  </label>
);

export default Label;
