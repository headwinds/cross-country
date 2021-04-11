/*
Atom

renders 1 native element
*/

import React, { Component } from 'react';
import styles from './row.scss';
import clsx from 'clsx';

const Row = ({ children, hasChildrenCentered = true, customClass }) => {
  const style = {};
  style['justifyContent'] = hasChildrenCentered ? 'center' : 'flex-start';

  return (
    <div className={clsx(styles.row, customClass)} style={style}>
      {children}
    </div>
  );
};

export default Row;
