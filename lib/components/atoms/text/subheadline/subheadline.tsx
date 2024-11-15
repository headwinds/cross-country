import React from "react";
import styles from "./subheadline.module.css";
import clsx from "clsx";

export interface SubHeadlineProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  text?: string;
  color?: string;
  size?: "small" | "medium" | "large";
  customStyle?: React.CSSProperties;
  customClass?: string;
}

const SubHeadline = ({
  text,
  color = "",
  size = "small",
  children,
  customStyle = {},
  customClass = "",
}) => {
  const key = `subheadline__${size}`;
  const className = `${styles.subheadline} ${styles[key]}`;
  return (
    <h2
      className={clsx(className, customClass)}
      style={{ color, ...customStyle }}
    >
      {text || children}
    </h2>
  );
};

export default SubHeadline;
