import React, { Component } from 'react';
import clsx from 'clsx';
import styles from './column.scss';

// <ExampleComponent className={clsx(styles.examplecomponentstyle, "pa5 bg-yellow")}/>

const Column = ({
  children,
  hasBackground = false,
  hasChildrenCentered = false,
  backgroundColor = '#eee',
  customStyle = {},
  customClass = '',
  ...rest
}) => {
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
    >
      {children}
    </div>
  );
};

export default Column;
