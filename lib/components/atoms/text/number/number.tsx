import React from "react";
import styles from "./number.module.css";
import clsx from "clsx";

export type NumberProps = {
  text?: string;
  color?: string;
  size?: "small" | "medium" | "large";
  customStyle?: React.CSSProperties;
  customClass?: string;
  children?: React.ReactNode;
};

const Number = ({
  text,
  color = "",
  size = "small",
  children,
  customStyle = {},
  customClass = "",
}: NumberProps) => {
  return (
    <p
      className={clsx(styles.number, customClass)}
      style={{ color, ...customStyle }}
    >
      {text || children}
    </p>
  );
};

export default Number;
