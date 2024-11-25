import * as React from "react";
import { Column } from "../../";
import styles from "./progress.module.css";

export interface ProgressProps {
  foo?: string;
}

const Progress: React.FC<ProgressProps> = ({ foo }) => {
  return (
    <Column dataTestId="progress" customClass={styles.Progress}>
      {foo || "plan & start building"}
    </Column>
  );
};

export default Progress;
