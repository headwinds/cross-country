/*
Atom

renders 1 native element
*/

import React, { Component } from 'react';
import styles from '../table.scss';
import clsx from 'clsx';

const TableBody = ({ children, customClass = '', customStyle = {}, ...rest }) => (
  <tbody className={clsx(styles.tableBody, customClass)} style={customStyle} {...rest}>
    {children}
  </tbody>
);

export default TableBody;
