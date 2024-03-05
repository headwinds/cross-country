import React from "react";
import { Row, Radio, Label } from "../../../../../";

const Option = ({ data }) => {
  const { id, value } = data;

  const onChange = (id) => {};
  const getSelected = (id) => {};
  const getTabIndex = (id) => {};

  return (
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
  );
};

export default Option;
