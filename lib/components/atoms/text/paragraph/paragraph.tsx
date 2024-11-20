import React, { Component } from "react";
import styles from "./paragraph.module.css";
import clsx from "clsx";

export interface ParagraphProps {
  children?: React.ReactNode;
  customClass?: string;
  customStyle?: React.CSSProperties;
}

const Paragraph = ({ children, customClass = "", customStyle = {} }) => (
  <p className={clsx(styles.paragraph, customClass)} style={customStyle}>
    {children}
  </p>
);

export default Paragraph;
