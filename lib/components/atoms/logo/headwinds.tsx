import React, { Component } from "react";
import styles from "./logo.module.css";
import headwinds from "./headwinds.svg";

const HeadwindsLogo = ({ width }) => (
  <img
    src={headwinds}
    width={width || 50}
    className={styles.logo}
    alt={"cross country logo"}
  />
);

export default HeadwindsLogo;
