// TODO: explore why I disabled typecheck on this file!
// @ts-nocheck
// npm run build

import React from "react";
import styles from "./radio.module.css";
import useDeviceDetection from "../../../hooks/useDeviceDetection";

// register is a function from react-hook-form

const Radio = ({ isSelected, id, onChange, tabIndex, register = null }) => {
  const mobileState = useDeviceDetection();

  const key = "radio";

  const className = isSelected ? styles[`${key}Selected`] : styles[`${key}`];

  if (register) {
    return (
      <div
        className={className}
        role="radio"
        id={id}
        data-value={id}
        type="radio"
        checked={isSelected}
        onClick={onChange}
        onKeyDown={onChange}
        tabIndex={tabIndex}
        {...register(`${id}`)}
      />
    );
  }

  return (
    <div
      className={className}
      role="radio"
      id={id}
      data-value={id}
      type="radio"
      checked={isSelected}
      onClick={onChange}
      onKeyDown={onChange}
      tabIndex={tabIndex}
    />
  );
};

export default Radio;
