import React from "react";
import { accordionProps } from "./accordion.types";

import styles from "./accordion.module.scss";

const accordion: React.FC<accordionProps> = ({ foo }) => (
    <div data-testid="accordion" className={styles.fooBar}>{foo}</div>
);

export default accordion;

