import React, { Component, forwardRef } from 'react';
import styles from './row.module.css';
import clsx from 'clsx';

const Row = forwardRef(({ children, hasChildrenCentered = true, customClass = '', customStyle = {}, ...rest }: any, ref) => {
  return (
    <div {...rest} className={clsx(styles.row, customClass)} style={customStyle} ref={ref}>
      {children}
    </div>
  );
});

export default Row;
