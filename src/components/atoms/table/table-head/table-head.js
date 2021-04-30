/*
Atom

renders 1 native element
*/

import React, { Component } from 'react';
import styles from '../table.scss';
import clsx from 'clsx';

const TableHead = ({ children, customClass = '', customStyle = {}, ...rest }) => (
  <th className={clsx(styles.tableHead, customClass)} style={customStyle} {...rest}>
    {children}
  </th>
);

export default TableHead;
