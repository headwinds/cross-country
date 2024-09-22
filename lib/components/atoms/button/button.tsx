import React from "react";
import clsx from "clsx";
import styles from "./button.module.css";

const Button = ({
  text = "",
  onClick = null,
  customClass = "",
  customStyle = {},
  children = null,
  type = "button",
  width = 100,
  ...rest
}) => {
  return (
    <button
      {...rest}
      type={type}
      style={{ width, ...customStyle }}
      className={clsx(styles.button, customClass)}
      onClick={onClick}
      onKeyDown={onClick}
    >
      {text || children}
    </button>
  );
};

export default Button;
