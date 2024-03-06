import React, { useEffect } from "react";
import styles from "./select.module.css";
import clsx from "clsx";

const Options = ({ options }) => {
  return (
    <>
      {options.map((option, index) => {
        return (
          <option key={`${option}index`} value={option}>
            {option}
          </option>
        );
      })}
    </>
  );
};

type SelectProps = {
  onChange: any;
  value?: string;
  customClass?: string;
  customStyle?: object;
  placeholder?: string;
  options?: string[];
};

const Select = ({
  onChange,
  value = "",
  customClass = "",
  customStyle = {},
  options = [],
  ...rest
}: SelectProps) => {
  return (
    <select
      className={clsx(styles.container, customClass)}
      onChange={(event) => {
        event.preventDefault();
        const {
          target: { value },
        } = event;
        return onChange(value);
      }}
      value={value}
      style={customStyle}
    >
      <Options options={["select...", ...options]} />
    </select>
  );
};

export default Select;
