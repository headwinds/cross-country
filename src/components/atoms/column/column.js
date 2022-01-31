import React, { Component, forwardRef } from 'react';
import clsx from 'clsx';
import styles from './column.scss';

const Column = forwardRef(
  (
    {
      children,
      hasBackground = false,
      hasChildrenCentered = false,
      backgroundColor = '#eee',
      customStyle = {},
      customClass = '',
      ...rest
    },
    ref
  ) => {
    customStyle['alignItems'] = hasChildrenCentered ? 'center' : 'flex-start';

    return (
      <div
        {...rest}
        className={clsx(
          {
            [styles.column]: true,
            [styles.column__opaque]: hasBackground,
            [styles.column__transparent]: hasBackground,
          },
          customClass
        )}
        style={customStyle}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

export default Column;
