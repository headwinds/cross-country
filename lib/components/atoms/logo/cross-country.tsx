import React, { Component } from "react";
import styles from "./logo.module.css";
import cross_country from "./cross-country.svg";

const CrossCountryLogo = ({ width }) => (
  <img
    src={cross_country}
    width={width || 50}
    className={styles.logo}
    alt={"cross country logo"}
  />
);

export default CrossCountryLogo;
