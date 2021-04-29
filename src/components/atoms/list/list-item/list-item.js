import React, { Component } from 'react';
import styles from '../list.scss';
import clsx from 'clsx';

const ListItem = ({ children, customClass = '', customStyle = {}, ...rest }) => (
  <li {...rest} className={clsx(styles.listItem, customClass)} style={customStyle}>
    {children}
  </li>
);

export default ListItem;
