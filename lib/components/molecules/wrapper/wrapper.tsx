import React, { forwardRef } from "react";
import Column from "../../atoms/column/column";
import styles from "./wrapper.module.css";
import clsx from "clsx";

// TODO: add types
const Wrapper = forwardRef(
  (
    {
      backgroundColor = "",
      customClass = "",
      customStyle = { margin: 0, padding: 0 },
      ...rest
    }: any,
    ref
  ) => {
    return (
      <Column
        {...rest}
        customClass={clsx(styles.wrapper, customClass)}
        customStyle={{
          backgroundColor,
          ...customStyle,
        }}
      ></Column>
    );
  }
);

export default Wrapper;
