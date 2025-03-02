import React, { Component, forwardRef } from "react";
import styles from "./row.module.css";
import clsx from "clsx";

export interface RowProps extends React.HTMLAttributes<HTMLHRElement> {
  id?: string;
  children: React.ReactElement | React.ReactElement[] | React.ReactNode;
  hasChildrenCentered?: boolean;
  customStyle?: React.CSSProperties;
  customClass?: string;
}

const Row = forwardRef<HTMLDivElement, RowProps>(
  (
    {
      id,
      children,
      hasChildrenCentered = true,
      customClass = "",
      customStyle = {},
      ...rest
    }: RowProps,
    ref
  ) => {
    return (
      <div
        {...rest}
        key={id}
        className={clsx(styles.row, customClass)}
        style={customStyle}
        ref={ref}
        data-testid={"row"}
      >
        {children}
      </div>
    );
  }
);

Row.displayName = "Row";

export default Row;
