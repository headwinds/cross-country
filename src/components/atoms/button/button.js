import React from 'react';

const Button = ({ text = '', handleClick, customClass = '', customStyle = {}, children = null }) => {
  return (
    <button
      style={customStyle}
      onClick={event => handleClick(event, text)}
      onKeyDown={event => handleClick(event, text)}
      className={customClass}
    >
      {text || children}
    </button>
  );
};

export default Button;
