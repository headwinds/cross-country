import React, { Component } from "react";
import styles from "./logo.module.css";
import headwinds from "./headwinds.svg";

type HeadwindsLogoProps = {
  width?: number;
};

const HeadwindsLogo = ({ width }: HeadwindsLogoProps) => (
  <img
    src={headwinds}
    width={width || 50}
    className={styles.logo}
    alt={"cross country logo"}
  />
);

export default HeadwindsLogo;
