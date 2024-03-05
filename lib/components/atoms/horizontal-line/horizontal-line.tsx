import React, { Component } from "react";
import styles from "./horizontal-line.module.css";
import clsx from "clsx";

const HorizontalLine = ({ customClass = "", customStyle = {}, ...rest }) => (
  <hr
    className={clsx(styles["style-three"], customClass)}
    style={customStyle}
    {...rest}
  />
);

export default HorizontalLine;
