import React, { Component } from "react";
import clsx from 'clsx';
import styles from "./column.scss";

// <ExampleComponent className={clsx(styles.examplecomponentstyle, "pa5 bg-yellow")}/>

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
      clsx(
        { [styles.column]: true,
        [styles.column__opaque]: hasBackground,
        [styles.column__transparent]: hasBackground }
      )
    }
    style={style}
  >
    {children}
  </div>)
  };

export default Column;
