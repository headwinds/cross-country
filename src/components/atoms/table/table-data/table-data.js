/*
Atom

renders 1 native element
*/

import React, { Component } from 'react';
import styles from '../table.module.css';
import clsx from 'clsx';

const TableData = ({ isHead = false, children, customClass = '', customStyle = {}, ...rest }) => (
  <td className={clsx(styles.tableData, { [styles.tableDataHead]: isHead }, customClass)} style={customStyle} {...rest}>
    {children}
  </td>
);

export default TableData;
