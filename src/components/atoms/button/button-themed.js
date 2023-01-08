import React from 'react';
import styles from './button.scss';
import Button from './button';
import clsx from 'clsx';

const ButtonThemed = ({
  type = 'button',
  text = '',
  onClick = null,
  customClass = '',
  customStyle = {},
  children = null,
}) => (
  <Button
    customClass={clsx(styles.button, styles.defaultButton, customClass)}
    text={text}
    onClick={onClick}
    customStyle={customStyle}
    type={type}
  >
    {text || children}
  </Button>
);

export default ButtonThemed;
