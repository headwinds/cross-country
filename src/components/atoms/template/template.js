/*
Atom

renders 1 native element
*/

import React, { Component } from 'react';
import styles from './template.scss';
import clsx from 'clsx';

const Template = ({ message, ...rest }) => (
  <div customClass={clsx(styles.template, customClass)} {...rest}>
    {message}
  </div>
);

export default Template;
