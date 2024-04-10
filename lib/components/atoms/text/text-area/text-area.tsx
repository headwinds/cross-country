import React, { useEffect } from "react";
import styles from "./text-area.module.css";

import clsx from "clsx";

const TextArea = ({
  onTextChange,
  value = "",
  customClass = "",
  customStyle = {},
  placeholder = "enter your text",
  type = "text-area",
  rows = 1,
  cols = 33,
  isDraggable = false,
  ...rest
}) => {
  return (
    <textarea
      rows={rows}
      cols={cols}
      className={clsx(styles.textInput, customClass)}
      onChange={(event) => {
        event.preventDefault();
        const {
          target: { value },
        } = event;
        return onTextChange(value);
      }}
      {...rest}
      value={value}
      style={customStyle}
      placeholder={placeholder}
      draggable={isDraggable}
    />
  );
};

export default TextArea;
