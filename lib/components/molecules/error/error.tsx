import * as React from "react";

import styles from "./error.module.css";

export interface ErrorProps {
  message?: string;
  customStyle?: any;
}

const Error = ({ message, customStyle }: ErrorProps) => (
  <div data-testid="error" className={styles.Error} style={customStyle}>
    {message || "sorry, something went wrong"}
  </div>
);

export default Error;
