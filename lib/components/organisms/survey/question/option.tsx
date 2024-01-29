import React from "react";

const Option = ({ option, key }) => {
  return (
    <div key={key}>
      <p>{option}</p>
    </div>
  );
};

export default Option;
