import React from 'react';
import Column from '../../atoms/column/column';
import styles from './page.scss';
import clsx from 'clsx';

const Page = ({ backgroundColor = '', customClass = '', customStyle = {}, ...rest }) => {
  return (
    <Column
      {...rest}
      customClass={clsx(styles.page, customClass)}
      customStyle={{ backgroundColor, ...customStyle }}
    ></Column>
  );
};

export default Page;
