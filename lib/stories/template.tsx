import React from "react";

export const Template = (props: { primary: boolean; label: string }) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: props.primary ? "blue" : "white" }}
    >
      {props.label}
    </button>
  );
};
