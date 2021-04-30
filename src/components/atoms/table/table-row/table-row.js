/*
Atom

renders 1 native element
*/

import React, { Component } from 'react';
import styles from '../table.scss';
import clsx from 'clsx';

const TableRow = ({ children, customClass = '', customStyle = {}, ...rest }) => (
  <tr className={clsx(styles.tableRow, customClass)} style={customStyle} {...rest}>
    {children}
  </tr>
);

export default TableRow;
