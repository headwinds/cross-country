/*
Atom

renders 1 native element
*/

import React, { Component } from 'react';
import styles from '../table.module.css';
import clsx from 'clsx';

const TableBody = ({ children, customClass = '', customStyle = {}, ...rest }) => (
  <tbody className={clsx(styles.tableBody, customClass)} style={customStyle} {...rest}>
    {children}
  </tbody>
);

export default TableBody;
