import React, { forwardRef } from 'react';
import Column from '../../atoms/column/column';
import styles from './wrapper.scss';
import clsx from 'clsx';

/*
 provide context - each wrapper should be a store for the tree
 the store can persist to localStorage
 
  localStorage.setItem('store', JSON.stringify(store));
  const store = JSON.parse(localStorage.getItem('store'));
  localStorage.clear();
  https://www.json.org/
*/

const Wrapper = forwardRef(({ backgroundColor = '', customClass = '', customStyle = {}, ...rest }, ref) => {
  return (
    <Column
      {...rest}
      customClass={clsx(styles.wrapper, customClass)}
      customStyle={{
        backgroundColor,
        ...customStyle,
      }}
    ></Column>
  );
});

export default Wrapper;
