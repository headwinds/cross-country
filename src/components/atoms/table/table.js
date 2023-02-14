/*
Atom

renders 1 native element
*/

import React, { Component } from 'react';
import styles from './table.module.css';
import clsx from 'clsx';

const Table = ({ children, customClass = '', customStyle = {}, ...rest }) => (
  <table className={clsx(styles.table, customClass)} style={customStyle} {...rest}>
    {children}
  </table>
);

export default Table;
