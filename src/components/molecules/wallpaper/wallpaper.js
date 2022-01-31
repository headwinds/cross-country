import React from 'react';
import Column from '../../atoms/column/column';
import styles from './wallpaper.scss';
import clsx from 'clsx';

const Wallpaper = ({ backgroundColor = '', customClass = '', customStyle = {}, ...rest }) => {
  return (
    <Column
      {...rest}
      customClass={clsx(styles.wallpaper, customClass)}
      customStyle={{ backgroundColor, ...customStyle }}
    ></Column>
  );
};

export default Wallpaper;
