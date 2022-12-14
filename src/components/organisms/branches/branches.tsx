import * as React from "react";
import { BranchesProps } from "./branches.types";

import styles from "./branches.module.scss";

const Branches: React.FC<BranchesProps> = ({ foo }) => (
    <div data-testid="branches" className={styles.fooBar}>{foo}</div>
);

export default Branches;

