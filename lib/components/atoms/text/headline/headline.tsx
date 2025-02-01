import React, { Component } from "react";
import styles from "./headline.module.css";
import clsx from "clsx";

export interface HeadlineProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  color?: string;
  text?: string;
  customStyle?: React.CSSProperties;
  customClass?: string;
}

const Headline = ({
  color = "",
  text,
  children,
  customStyle = {},
  customClass = "",
  ...rest
}: HeadlineProps) => (
  <h1
    {...rest}
    className={clsx(styles.headline, customClass)}
    style={{ color, ...customStyle }}
  >
    {text || children}
  </h1>
);

export default Headline;
