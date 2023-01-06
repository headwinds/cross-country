import React, { Component } from 'react';
import styles from '../text.scss';
import PropTypes from 'prop-types';
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
      style={customStyle}
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
