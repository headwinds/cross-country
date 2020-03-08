/*
Atom

renders 1 native element
*/

import React from "react";
import styles from "./button.scss";

const Button = ({ text, label, handleClick, customStyle }) => (
  <button
    style={customStyle}
    onClick={() => handleClick(label)}
    className={styles.button}
  >
    {text}
  </button>
);

export default Button;
