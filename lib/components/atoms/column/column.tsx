import React, { Component, forwardRef } from 'react';
import clsx from 'clsx';
import styles from './column.module.css';
import { ColumnProps } from './column.types';

const Column = forwardRef(
  (
    {
      children,
      hasBackground = false,
      hasChildrenCentered = false,
      backgroundColor = '#eee',
      dataTestId = 'column',
      customStyle = null,
      customClass = '',
      ...rest
    }: any,
    ref
  ) => {
    return (
      <div
        ref={ref}
        {...rest}
        data-testid={dataTestId}
        className={clsx(
          styles.column,
          {
            [styles.column__opaque]: hasBackground,
            [styles.column__transparent]: hasBackground,
          },
          customClass
        )}
        style={{...customStyle}} // doesn't to work? TODO: fix
      >
        {children}
      </div>
    );
  }
);

export default Column;
