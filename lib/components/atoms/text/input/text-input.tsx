import React, { Component } from "react";
import styles from "./text-input.module.css";
import debounce from "debounce";

import clsx from "clsx";

const TextInput = ({
  onTextChange,
  value,
  customClass = "",
  customStyle = {},
  placeholder = "enter your text",
  type = "text",
  isDisabled = false,
  data = null,
  register = null,
  ...rest
}) => {
  // react-hook-form requires a name and register
  if (register) {
    return (
      <>
        <input
          type={type}
          disabled={isDisabled}
          className={clsx(styles.textInput, customClass)}
          style={customStyle}
          placeholder={placeholder}
          {...register(data?.name)}
        />
      </>
    );
  }

  return (
    <input
      {...rest}
      type={type}
      className={clsx(styles.textInput, customClass)}
      onChange={(event) => {
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
