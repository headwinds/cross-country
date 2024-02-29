import React from "react";
import styles from "./button.module.css";
import Button from "./button";
import clsx from "clsx";

const ButtonThemed = ({
  type = "button",
  text = "",
  onClick = null,
  customClass = "",
  customStyle = {},
  children = null,
  ariaLabel = "",
  isDisabled = false,
  ...rest
}) => (
  <Button
    {...rest}
    customClass={clsx(styles.button, styles.defaultButton, customClass, {
      [styles.disabled]: isDisabled,
    })}
    text={text}
    onClick={onClick}
    customStyle={customStyle}
    type={type}
    aria-label={ariaLabel}
    disabled={isDisabled}
  >
    {text || children}
  </Button>
);

export default ButtonThemed;
