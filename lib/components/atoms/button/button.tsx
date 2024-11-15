// TODO type check
// @ts-nocheck
import React from "react";
import styles from "./button.module.css";
import Button from "./button";
import clsx from "clsx";

export type ButtonProps = {
  text?: string;
  onClick?: () => void;
  customClass?: string;
  customStyle?: React.CSSProperties;
  children?: React.ReactNode;
  ariaLabel?: string;
  isDisabled?: boolean;
};

const Button = ({
  text = "",
  onClick = null,
  customClass = "",
  customStyle = {},
  children = null,
  ariaLabel = "",
  isDisabled = false,
  ...rest
}: ButtonProps) => (
  <Button
    {...rest}
    customClass={clsx(styles.button, styles.defaultButton, customClass, {
      [styles.disabled]: isDisabled,
    })}
    text={text}
    onClick={onClick}
    customStyle={customStyle}
    aria-label={ariaLabel}
    disabled={isDisabled}
  >
    {text || children}
  </Button>
);

export default Button;
