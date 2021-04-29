import React from 'react';
import clsx from 'clsx';

const Button = ({ text = '', handleClick, customClass = '', customStyle = {}, children = null }) => {
  return (
    <button
      style={customStyle}
      className={customClass}
      onClick={event => handleClick(event, text)}
      onKeyDown={event => handleClick(event, text)}
      className={customClass}
    >
      {text || children}
    </button>
  );
};

export default Button;
