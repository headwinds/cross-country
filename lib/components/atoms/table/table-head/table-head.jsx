/*
Atom

renders 1 native element
*/

import React, { Component } from 'react';
import styles from '../table.module.css';
import clsx from 'clsx';

const TableHead = ({ children, customClass = '', customStyle = {}, ...rest }) => (
  <thead className={clsx(styles.tableHead, customClass)} style={customStyle} {...rest}>
    {children}
  </thead>
);

export default TableHead;
