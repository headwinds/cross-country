import React from 'react';
import styles from './button.scss';
import Button from './button';
import clsx from 'clsx';

const ButtonThemed = ({ text = '', handleClick, customClass = '', customStyle = {}, children = null }) => (
  <Button
    customClass={clsx(styles.button, styles.defaultButton, customClass)}
    text={text}
    handleClick={handleClick}
    customStyle={customStyle}
  >
    {text || children}
  </Button>
);

export default ButtonThemed;
