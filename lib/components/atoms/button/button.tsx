import React from "react";
import styles from "./button.module.css";
import clsx from "clsx";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  onClick?: () => void;
  customClass?: string;
  customStyle?: React.CSSProperties;
  children?: React.ReactNode;
  ariaLabel?: string;
  isDisabled?: boolean;
}

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
  <button
    {...rest}
    className={clsx(styles.button, styles.defaultButton, customClass, {
      [styles.disabled]: isDisabled,
    })}
    onClick={onClick}
    style={customStyle}
    aria-label={ariaLabel}
    disabled={isDisabled}
  >
    {text || children}
  </button>
);

export default Button;
