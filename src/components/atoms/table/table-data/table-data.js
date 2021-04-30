/*
Atom

renders 1 native element
*/

import React, { Component } from 'react';
import styles from '../table.scss';
import clsx from 'clsx';

const TableData = ({ children, customClass = '', customStyle = {}, ...rest }) => (
  <td className={clsx(styles.tableData, customClass)} style={customStyle} {...rest}>
    {children}
  </td>
);

export default TableData;
