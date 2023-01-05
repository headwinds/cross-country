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
  ...rest
}) => {
  return (
    <input
      {...rest}
      type="text"
      className={clsx(styles.textInput, customClass)}
      style={customStyle}
      onChange={({ target: { value } }) => onTextChange(value)}
      //value={value}
      style={customStyle}
      placeholder={placeholder}
    />
  );
};

export default TextInput;
