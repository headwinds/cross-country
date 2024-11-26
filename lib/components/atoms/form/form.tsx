import React, { Component } from "react";
import styles from "./form.module.css";
import clsx from "clsx";

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  customClass?: string;
  customStyle?: React.CSSProperties;
}

const Form = ({
  children,
  onSubmit = null,
  customClass = "",
  customStyle = {},
  ...rest
}) => (
  <form
    onSubmit={onSubmit}
    className={clsx(styles.form, customClass)}
    style={customStyle}
    {...rest}
  >
    {children}
  </form>
);

export default Form;
