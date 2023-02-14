import React from 'react';
import styles from './button.module.css';
import Button from './button';
import clsx from 'clsx';

console.log('styles ', styles);

const ButtonThemed = ({
  type = 'button',
  text = '',
  onClick = null,
  customClass = '',
  customStyle = {},
  children = null,
  ariaLabel = '',
  ...rest
}) => (
  <Button
    {...rest}
    customClass={clsx(styles.button, styles.defaultButton, customClass)}
    text={text}
    onClick={onClick}
    customStyle={customStyle}
    type={type}
    aria-label={ariaLabel}
  >
    {text || children}
  </Button>
);

export default ButtonThemed;
