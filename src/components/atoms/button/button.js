/*
Atom

renders 1 native element
*/

import React, { Component } from "react";
import styles from "./button.scss";

const Button = ({ text, clickHandler, customStyle }) => (
  <button
    style={customStyle}
    onClick={clickHandler}
    className={styles.button}
  >
    {text}
  </button>
);

export default Button;
