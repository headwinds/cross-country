import React, { Component } from 'react';
import styles from '../text.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const TextInput = ({ onChange, value, customClass = '', customStyle = {}, ...rest }) => {
  return (
    <input
      {...rest}
      type="text"
      className={clsx(styles.textInput, customClass)}
      style={customStyle}
      onChange={onChange}
      value={value}
      style={customStyle}
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
