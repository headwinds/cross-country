import React from 'react';
import styles from './button.scss';
import Button from './button';
import clsx from 'clsx';

const ButtonThemed = ({ text = '', onClick = null, customClass = '', customStyle = {}, children = null }) => (
  <Button
    customClass={clsx(styles.button, styles.defaultButton, customClass)}
    text={text}
    onClick={onClick}
    customStyle={customStyle}
  >
    {text || children}
  </Button>
);

export default ButtonThemed;
