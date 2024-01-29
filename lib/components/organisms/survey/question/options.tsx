import React from "react";
import Option from "./option";

const Options = ({ options }) => {
  return (
    <>
      {options.map((option, index) => (
        <Option option={option} key={index} />
      ))}
    </>
  );
};

export default Question;
