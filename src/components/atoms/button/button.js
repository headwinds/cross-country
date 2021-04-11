/*
Atom

renders 1 native element
*/

import React from 'react';
import styles from './button.scss';

const Button = ({ text, label, handleClick, customStyle, children }) => (
  <button style={customStyle} onClick={event => handleClick(event, label)} className={styles.button}>
    {text || children}
  </button>
);

export default Button;
