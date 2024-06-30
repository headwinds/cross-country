import React, { useState } from "react";
import Checkbox from "../checkbox";

const CheckboxStory = () => {
  const [isChecked, setChecked] = useState(false);

  const handleChange = () => {
    console.log("CheckboxStory handleChange");
    setChecked(!isChecked);
  };

  return (
    <Checkbox id={"0"} isChecked={isChecked} handleChange={handleChange} />
  );
};

export default CheckboxStory;
