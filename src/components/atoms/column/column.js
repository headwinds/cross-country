import React, { Component } from "react";
import styles from "./column.scss";

const Column = ({
  children,
  hasBackground = true,
  hasChildrenCentered = true,
  backgroundColor = "#eee"
}) => {
  const style = hasBackground ? { backgroundColor, alignItems: hasChildrenCentered } : {};
  style["alignItems"] = hasChildrenCentered ? "center" : "flex-start";
  
  return(
  <div
    className={
      hasBackground
        ? `${styles.column} ${styles.column__opaque}`
        : styles.column
    }
    style={style}
  >
    {children}
  </div>)
  };

export default Column;
