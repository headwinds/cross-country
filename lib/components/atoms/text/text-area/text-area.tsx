import React, { useEffect } from "react";
import styles from "./text-area.module.css";

import clsx from "clsx";

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  onTextChange: (text: string) => void;
  value: string;
  customClass?: string;
  customStyle?: React.CSSProperties;
  placeholder?: string;
  type?: string;
  rows?: number;
  cols?: number;
  isDraggable?: boolean;
}

const TextArea = ({
  onTextChange,
  value = "",
  customClass = "",
  customStyle = {},
  placeholder = "What's on your mind?",
  type = "text-area",
  rows = 1,
  cols = 33,
  isDraggable = false,
  ...rest
}: TextAreaProps) => {
  return (
    <textarea
      rows={rows}
      cols={cols}
      className={clsx(styles.textArea, customClass)}
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
