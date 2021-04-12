import React, { Component } from 'react';
import styles from '../text.scss';
import PropTypes from 'prop-types';

/**
 * Allows the user to enter text
 *
 * @category Atoms
 * @component
 * @param {function} onChangeHandler - A change handler function param
 * @param {object} customStyle - An object param
 * @param {string} value - A string param
 * @example
 * const onChangeHandler = e => {}
 * const customStyle = {width: 200}
 * const value = "hello world"
 * return (
 *   <TextInput onChangeHandler={onChangeHandler} customStyle={customStyle} value={value} />
 * )
 */
const TextInput = ({ onChangeHandler, customStyle, value, type = '' }) => {
  return (
    <input
      type="text"
      type={type}
      className={styles.textInput}
      style={customStyle}
      onChange={onChangeHandler}
      value={value}
    />
  );
};

TextInput.propTypes = {
  /**
   * TextInput's onChangeHandler
   */
  onChangeHandler: PropTypes.func,
  /**
   * TextInput's value
   */
  value: PropTypes.string,
  /**
   * TextInput's custom style
   */
  customStyle: PropTypes.shape({}),
};

TextInput.defaultProps = {};

export default TextInput;
