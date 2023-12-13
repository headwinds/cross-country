import React, { Component } from 'react';
import styles from './text-input.module.css';

import clsx from 'clsx';

const TextInput = ({
  onTextChange,
  value,
  customClass = '',
  customStyle = {},
  placeholder = 'enter your text',
  type = 'text',
  ...rest
}) => {
  return (
    <input
      {...rest}
      type={type}
      className={clsx(styles.textInput, customClass)}
      onChange={event => {
        event.preventDefault();
        const {
          target: { value },
        } = event;
        return onTextChange(value);
      }}
      value={value}
      style={customStyle}
      placeholder={placeholder}
    />
  );
};

export default TextInput;
