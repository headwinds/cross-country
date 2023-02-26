import React, { Component } from 'react';
import clsx from 'clsx';
import styles from './list.css';

const List = ({ children, customClass = '', customStyle = {}, menuId = 'menuID1', ...rest }) => (
  <ul {...rest} className={clsx(styles.list, customClass)} style={customStyle} id={menuId}>
    {children}
  </ul>
);

export default List;
