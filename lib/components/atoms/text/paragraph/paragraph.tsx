import React, { Component } from "react";
import styles from "./paragraph.module.css";
import clsx from "clsx";

export interface ParagraphProps {
  text?: string;
  children?: React.ReactNode;
  customClass?: string;
  customStyle?: React.CSSProperties;
}

const Paragraph = ({ text, children, customClass = "", customStyle = {} }) => (
  <p className={clsx(styles.paragraph, customClass)} style={customStyle}>
    {text || children}
  </p>
);

export default Paragraph;
