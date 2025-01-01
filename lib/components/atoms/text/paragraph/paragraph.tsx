import React, { Component } from "react";
import styles from "./paragraph.module.css";
import clsx from "clsx";

export interface ParagraphProps {
  children?: React.ReactNode;
  customClass?: string;
  customStyle?: React.CSSProperties;
  maxWidth?: number;
}

const Paragraph = ({
  children,
  customClass = "",
  customStyle = {},
  maxWidth = 600,
}) => (
  <p
    className={clsx(styles.paragraph, customClass)}
    style={{ maxWidth, ...customStyle }}
  >
    {children}
  </p>
);

export default Paragraph;
