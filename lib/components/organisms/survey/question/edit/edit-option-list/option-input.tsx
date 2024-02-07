import React from "react";
import { Column, Row, Button, SubHeadline, TextInput } from "../../../../../";
import { Trash } from "@phosphor-icons/react";

const OptionInput = ({
  id = 0,
  updateOption,
  value = "",
  removeOption = null,
}) => {
  const onTextChange = (text) => {
    console.log("OptionInput onTextChange e: ", text);
    const newValue = text;
    updateOption(id, newValue);
  };
  return (
    <Column customStyle={{ padding: 0, margin: 0 }}>
      <Row>
        <Button onClick={() => removeOption(id)}>
          <Trash size={20} />
        </Button>
        <TextInput
          value={value}
          onTextChange={onTextChange}
          customStyle={{ width: "80%" }}
        />
      </Row>
    </Column>
  );
};

export default OptionInput;
