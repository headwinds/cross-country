import React, { Component } from "react";
import Column from "../../atoms/column";
import Radio from "../../atoms/radio";

// https://www.w3.org/TR/2016/WD-wai-aria-practices-1.1-20160317/examples/radio/radio.html

const RadioGroup = ({ handleChange, list, selectedId }) => {
  const getSelected = radio => radio.id === selectedId;
  const getTabIndex = radio => ((radio.id === selectedId) ? 0 : 1); 

  const radiobuttons = list.map(radio => (
    <Radio
      key={radio.id}
      id={radio.id}
      handleChange={handleChange}
      isSelected={getSelected(radio)}
      tabIndex={getTabIndex(radio)}
    />
  ));

  return <Column role="radiogroup">{radiobuttons}</Column>;
};

export default RadioGroup;
