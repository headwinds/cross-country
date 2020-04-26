import React, { Component } from "react";
import styles from "../text.scss";

const TextInput = ({ onChangeHandler, customStyle, value }) => {
  if (value) {
    return (
      <input
        type="text"
        className={styles.textInput}
        style={customStyle}
        onChange={onChangeHandler}
        value
      />
    );
  }

  return (
    <input
      type="text"
      className={styles.textInput}
      style={customStyle}
      onChange={onChangeHandler}
    />
  );
};

export default TextInput;
