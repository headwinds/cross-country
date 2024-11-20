import React, { forwardRef } from "react";
import Column from "../../atoms/column/column";
import styles from "./wrapper.module.css";
import clsx from "clsx";

export interface WrapperProps {
  backgroundColor?: string;
  customClass?: string;
  customStyle?: any;
}

const Wrapper = forwardRef<HTMLDivElement, WrapperProps>(
  (
    {
      backgroundColor = "",
      customClass = "",
      customStyle = { margin: 0, padding: 0 },
      ...rest
    },
    ref
  ) => {
    return (
      <Column
        {...rest}
        ref={ref}
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
