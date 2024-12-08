import * as React from "react";
import styles from "./__COMPONENT_LOWERCASE_NAME__.module.css";

export interface __COMPONENT_UPPERCASE_NAME__Props {
  foo: string;
}

const __COMPONENT_UPPERCASE_NAME__ = ({
  foo,
}: __COMPONENT_UPPERCASE_NAME__Props) => {
  return (
    <div
      data-testid="__COMPONENT_UPPERCASE_NAME__"
      className={styles.__COMPONENT_UPPERCASE_NAME__}
    >
      {foo || "plan & start building"}
    </div>
  );
};

export default __COMPONENT_UPPERCASE_NAME__;
