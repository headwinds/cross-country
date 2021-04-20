/*
Atom

renders 1 native element
*/

import React from 'react';
import styles from './button.scss';
import Button from './button';
import clsx from 'clsx';

const ButtonThemed = ({ text = '', handleClick, customClass = '', customStyle = {}, children = null }) => (
  <Button className={clsx(styles.button, customClass)} text={text} handleClick={handleClick} style={customStyle}>
    {text || children}
  </Button>
);

export default ButtonThemed;
