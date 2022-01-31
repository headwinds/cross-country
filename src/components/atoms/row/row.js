import React, { Component, forwardRef } from 'react';
import styles from './row.scss';
import clsx from 'clsx';

const Row = forwardRef(({ children, hasChildrenCentered = true, customClass = '', customStyle = {}, ...rest }, ref) => {
  return (
    <div {...rest} className={clsx(styles.row, customClass)} style={customStyle} ref={ref}>
      {children}
    </div>
  );
});

export default Row;
