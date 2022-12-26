import React, { Component, forwardRef } from 'react';
import clsx from 'clsx';
import styles from './column.scss';
import { ColumnProps } from './column.types';

const Column: React.FC<ColumnProps> = forwardRef(
  (
    {
      children,
      hasBackground = false,
      hasChildrenCentered = false,
      backgroundColor = '#eee',
      dataTestId = 'column',
      customStyle = {},
      customClass = '',
      ...rest
    },
    ref
  ) => {
    // this would prevent the user from overriding the alignItems! The user in this case being me
    // customStyle['alignItems'] = hasChildrenCentered ? 'center' : 'flex-start';

    return (
      <div
        {...rest}
        data-testid={dataTestId}
        className={clsx(
          {
            [styles.column]: true,
            [styles.column__opaque]: hasBackground,
            [styles.column__transparent]: hasBackground,
          },
          customClass
        )}
        style={customStyle}
      >
        {children}
      </div>
    );
  }
);

export default Column;
