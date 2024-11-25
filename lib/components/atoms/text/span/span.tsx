import * as React from "react";
import clsx from "clsx";

import styles from "./span.module.css";

export interface SpanProps extends React.HTMLAttributes<HTMLSpanElement> {
  customClass?: string;
  customStyle?: React.CSSProperties;
  dataTestId?: string;
  children:
    | React.ReactNode
    | React.ReactNode[]
    | React.ReactElement
    | React.ReactElement[];
}

const Span: React.FC<SpanProps> = ({
  dataTestId = "span",
  customClass = "",
  customStyle = {},
  children,
  ...rest
}) => {
  return (
    <span
      data-testid={dataTestId}
      className={clsx(styles.Span, customClass)}
      style={customStyle}
      {...rest}
    >
      {children}
    </span>
  );
};

export default Span;
