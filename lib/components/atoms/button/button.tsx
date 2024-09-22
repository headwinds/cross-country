import React from "react";
import clsx from "clsx";
import styles from "./button.module.css";

interface ButtonProps {
  text?: string;
  onClick?: () => void;
  customClass?: string;
  customStyle?: React.CSSProperties;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  width?: number;
}

const Button = ({
  text = "",
  onClick = null,
  customClass = "",
  customStyle = {},
  children = null,
  width = 100,
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
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
