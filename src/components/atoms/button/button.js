import React from 'react';
import clsx from 'clsx';
import styles from './button.module.css';

const Button = ({
  text = '',
  onClick = null,
  customClass = '',
  customStyle = {},
  children = null,
  type = 'button',
  ...rest
}) => {
  return (
    <button
      {...rest}
      type={type}
      style={customStyle}
      className={clsx(styles.button, customClass)}
      onClick={onClick}
      onKeyDown={onClick}
    >
      {text || children}
    </button>
  );
};

export default Button;
