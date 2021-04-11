import React, { Component } from 'react';
import clsx from 'clsx';
import styles from './column.scss';

// <ExampleComponent className={clsx(styles.examplecomponentstyle, "pa5 bg-yellow")}/>

const Column = ({
  children,
  hasBackground = false,
  hasChildrenCentered = true,
  backgroundColor = '#eee',
  customStyle = {},
  customClass = '',
}) => {
  const style = hasBackground ? { backgroundColor, alignItems: hasChildrenCentered, ...customStyle } : customStyle;
  style['alignItems'] = hasChildrenCentered ? 'center' : 'flex-start';

  return (
    <div
      className={clsx(
        {
          [styles.column]: true,
          [styles.column__opaque]: hasBackground,
          [styles.column__transparent]: hasBackground,
        },
        customClass
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default Column;
