import React, { Component } from "react";
import clsx from "clsx";
import styles from "./grid.scss";

const Grid = ({ children }) => {
  return <div className={styles.grid}>{children}</div>;
};

export default Grid;
