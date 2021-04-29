import React, { Component } from 'react';
import clsx from 'clsx';
import styles from './list.scss';

const List = ({ children, customClass = '', customStyle = {}, ...rest }) => (
  <ul {...rest} className={clsx(styles.list, customClass)} style={customStyle}>
    {children}
  </ul>
);

export default List;
