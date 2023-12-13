import React, { Component } from 'react';
import clsx from 'clsx';
import styles from './list.module.css';

const List = ({ children, customClass = '', customStyle = {}, menuId = 'menuID1', isOrdered = false, ...rest }) => {
  if (isOrdered) {
    return (
      <ol {...rest} className={clsx(styles.list, customClass)} style={customStyle} id={menuId}>
        {children}
      </ol>
    );
  }
  return (
    <ul {...rest} className={clsx(styles.list, customClass)} style={customStyle} id={menuId}>
      {children}
    </ul>
  );
};

export default List;
