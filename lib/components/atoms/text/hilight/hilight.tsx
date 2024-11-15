import React, { Component } from "react";
import styles from "./hilight.module.css";
import clsx from "clsx";

export interface HilightProps extends React.HTMLAttributes<HTMLSpanElement> {
  text?: string;
  customClass?: string;
  customStyle?: React.CSSProperties;
  hilightColor?: string;
}

const Hilight = ({
  text,
  children,
  customClass = "",
  customStyle = {},
  hilightColor,
  ...rest
}) => {
  const newStyle = { ...customStyle, backgroudColor: hilightColor };
  console.log("Hilight hilightColor: ", newStyle);
  return (
    <span
      className={clsx(styles.span, customClass)}
      style={customStyle}
      {...rest}
    >
      {text || children}
    </span>
  );
};

export default Hilight;
