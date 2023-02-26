/*
Atom

renders 1 native element
*/

import React, { Component } from 'react';
import styles from '../table.module.css';
import clsx from 'clsx';

const TableRow = ({ children, customClass = '', customStyle = {}, ...rest }) => (
  <tr className={clsx(styles.tableRow, customClass)} style={customStyle} {...rest}>
    {children}
  </tr>
);

export default TableRow;
