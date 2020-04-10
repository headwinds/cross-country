import React from "react";
import styles from "./radio.scss";

const Radio = ({ isSelected, id, handleChange, tabIndex }) => {

  const isMobile = true;
  const key = isMobile ? "radioMobile" : "radio";

  const className = isSelected ? styles[`${key}Selected`] : styles[`${key}`];

  return (
    <div
      className={className}
      role="radio"
      id={id}
      data-value={id}
      type="radio"
      checked={isSelected}
      onClick={handleChange}
      onkeydown={handleChange}
      tabIndex={tabIndex}
    />
  );
};

export default Radio;
