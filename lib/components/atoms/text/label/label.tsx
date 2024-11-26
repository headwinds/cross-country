import React from "react";
import styles from "./label.module.css";
import clsx from "clsx";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  forId?: string;
  customClass?: string;
  customStyle?: React.CSSProperties;
}

const Label = ({
  children,
  forId = "",
  customClass = "",
  customStyle = {},
  ...rest
}) => (
  <label
    {...rest}
    className={clsx(styles.label, customClass)}
    htmlFor={forId}
    style={customStyle}
  >
    {children}
  </label>
);

export default Label;
