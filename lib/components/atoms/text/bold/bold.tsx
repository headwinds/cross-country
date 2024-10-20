import React from "react";
import styles from "./bold.module.css";
import clsx from "clsx";

interface BoldProps {
  children: React.ReactNode;
  customClass?: string;
  customStyle?: React.CSSProperties;
}

const Bold = ({
  children,
  customClass = "",
  customStyle = {},
  ...rest
}: BoldProps) => (
  <b {...rest} className={clsx(styles.bold, customClass)} style={customStyle}>
    {children}
  </b>
);

export default Bold;
