import React from 'react';
import clsx from 'clsx';

const Button = ({ text = '', onClick = null, customClass = '', customStyle = {}, children = null }) => {
  return (
    <button style={customStyle} className={customClass} onClick={onClick} onKeyDown={onClick} className={customClass}>
      {text || children}
    </button>
  );
};

export default Button;
