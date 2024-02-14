import React, { Component, useState } from "react";
import Column from "../../atoms/column";
import Row from "../../atoms/row";
import Radio from "../../atoms/radio";
import Label from "../../atoms/text/label";

// https://www.w3.org/TR/2016/WD-wai-aria-practices-1.1-20160317/examples/radio/radio.html

// register is an optional function if are using react-hook-form

const RadioGroup = ({ onChange, data, selectedId = 0, name = "name" }) => {
  if (!data?.options) {
    return (
      <Column customStyle={{ color: "red" }}>
        Error: a list of options are required!
      </Column>
    );
  }

  if (!onChange) {
    return (
      <Column customStyle={{ color: "red" }}>
        Error: onChange is required!
      </Column>
    );
  }

  if (!selectedId) {
    return (
      <Column customStyle={{ color: "red" }}>
        Error: selectedId is required!
      </Column>
    );
  }

  const [selected, setSelected] = useState(selectedId);

  // check the list and find the selected item
  const getSelected = (id) => (id === selectedId ? true : false);
  const getTabIndex = (id) => (id === selectedId ? 0 : 1);

  const radiobuttons = data.options.map(({ id, value }) => (
    <Row key={id}>
      <Radio
        key={id}
        id={id}
        onChange={() => onChange(id)}
        isSelected={getSelected(id)}
        tabIndex={getTabIndex(id)}
      />
      <Label forId={id}>{value}</Label>
    </Row>
  ));

  return (
    <Column role="radiogroup" customStyle={{ padding: 0 }}>
      {radiobuttons}
    </Column>
  );
};

export default RadioGroup;
