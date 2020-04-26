import React, { Component } from "react";
import styles from "../text.scss";

const TextInput = ({ onChangeHandler, customStyle }) => (
  <input
    type="text"
    className={styles.textInput}
    style={customStyle}
    onChange={onChangeHandler}
  />
);

export default TextInput;
