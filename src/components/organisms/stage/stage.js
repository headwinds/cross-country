import React, { Component } from 'react';
import { Column, SubHeadline } from '../../';
import styles from './stage.scss';
import clsx from 'clsx';

const Stage = ({ config, children }) => {
  return (
    <Column
      customClass={clsx(styles.stage, config.column.customClass)}
      style={config.column.customStyle}
      {...config.column.rest}
    >
      {children}
    </Column>
  );
};

export default Stage;
