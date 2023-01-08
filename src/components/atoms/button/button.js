import React from 'react';
import clsx from 'clsx';

const Button = ({
  text = '',
  onClick = null,
  customClass = '',
  customStyle = {},
  children = null,
  type = 'button',
}) => {
  return (
    <button
      type={type}
      style={customStyle}
      className={customClass}
      onClick={onClick}
      onKeyDown={onClick}
      className={customClass}
    >
      {text || children}
    </button>
  );
};

export default Button;
