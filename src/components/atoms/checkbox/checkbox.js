/*
Atom

renders 1 native element
*/

import React from "react";
import styles from "./checkbox.scss";

const Checkbox = ({ value, isChecked }) => (
  <input
   className={styles.checkbox}
    type="checkbox"
    value={value}
    checked={isChecked} />
);

export default Checkbox;
