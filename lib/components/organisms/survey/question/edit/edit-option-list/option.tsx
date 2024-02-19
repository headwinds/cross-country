import React from "react";
import { Row, Radio, Label } from "../../../../../";

const Option = ({ data }) => {
  const { id, value } = data;

  const onChange = () => {};
  const getSelected = () => {};
  const getTabIndex = () => {};

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
