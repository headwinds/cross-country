import React from 'react';
import Column from '../../atoms/column/column';
import styles from './wrapper.scss';
import clsx from 'clsx';

const Wrapper = ({ backgroundColor = '', customClass = '', customStyle = {}, ...rest }) => {
  return (
    <Column
      {...rest}
      customClass={clsx(styles.wrapper, customClass)}
      customStyle={{ backgroundColor, ...customStyle }}
    ></Column>
  );
};

export default Wrapper;
