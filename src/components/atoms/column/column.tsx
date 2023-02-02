import React, { Component, forwardRef } from 'react';
import clsx from 'clsx';
import styles from './column.scss';
import { ColumnProps } from './column.types';

const Column = forwardRef<HTMLInputElement>(
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
    },
    ref
  ) => {
    console.log('Column customStyle: ', customStyle);
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
        style={{ ...customStyle }}
      >
        {children}
      </div>
    );
  }
);

export default Column;
