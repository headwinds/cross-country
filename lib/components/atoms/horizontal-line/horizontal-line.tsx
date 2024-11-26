import React from "react";
import styles from "./horizontal-line.module.css";
import clsx from "clsx";

export interface HorizontalLineProps
  extends React.HTMLAttributes<HTMLHRElement> {
  customClass?: string;
  customStyle?: React.CSSProperties;
}

const HorizontalLine = ({
  customClass = "",
  customStyle = {},
  ...rest
}: HorizontalLineProps) => (
  <hr
    className={clsx(styles["style-three"], customClass)}
    style={customStyle}
    {...rest}
  />
);

export default HorizontalLine;
