import React from "react";

const Option = ({ option, id }) => {
  return (
    <div key={id}>
      <p>{option}</p>
    </div>
  );
};

export default Option;
