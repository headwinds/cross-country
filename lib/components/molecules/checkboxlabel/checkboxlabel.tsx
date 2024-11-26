import React, { Component } from "react";
import Label from "../../atoms/text/label";
import Row from "../../atoms/row";
import Checkbox from "../../atoms/checkbox";

export interface CheckboxLabelProps {
  config: {
    text: string;
    id: string;
    isChecked: boolean;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
}

const CheckboxLabel = ({ config: { text, id, isChecked, handleChange } }) => {
  return (
    <Row>
      <Checkbox id={id} isChecked={isChecked} handleChange={handleChange} />
      <Label forId={id}>{text}</Label>
    </Row>
  );
};

export default CheckboxLabel;
