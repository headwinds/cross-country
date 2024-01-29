import React from "react";
import { Column, Row, Button, SubHeadline, TextInput } from "../../../";
import { Trash } from "@phosphor-icons/react";

const OptionInput = ({ id = 0, onChange, value = "", removeOption = null }) => {
  return (
    <Column customStyle={{ padding: 0, margin: 0 }}>
      <Row>
        <Button onClick={() => removeOption(id)}>
          <Trash size={20} />
        </Button>
        <TextInput
          value={value}
          onTextChange={onChange}
          customStyle={{ width: "80%" }}
        />
      </Row>
    </Column>
  );
};

export default OptionInput;
