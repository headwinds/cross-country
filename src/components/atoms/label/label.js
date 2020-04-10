import React from "react";
import styles from "./label.scss";

const Label = ({ text, forId }) => (
  <label className={styles.label} htmlFor={forId}>{text}</label>
);

export default Label;
