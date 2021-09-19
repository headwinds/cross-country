import React, { Component } from 'react';
import { Column } from '../../../';
import styles from './actor.scss';
import clsx from 'clsx';

const Actor = ({ children, customClass = '', customStyle = {}, ...rest }) => {
  return (
    <Column>
      <div className={clsx(styles.actor, customClass)} style={customStyle} {...rest}>
        {children}
      </div>
    </Column>
  );
};

export default Actor;
