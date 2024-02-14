import React, { useState } from "react";
import {
  Column,
  Row,
  Button,
  SubHeadline,
  TextArea,
  Paragraph,
} from "../../../../../";
import { Trash } from "@phosphor-icons/react";

const OptionInput = ({
  id = 0,
  updateOption,
  value = "",
  removeOption = null,
  answer,
}) => {
  const [option, setOption] = useState(value);
  const [isEdit, toggleIsEdit] = useState(false);

  const onTextChange = (text) => {
    console.log("OptionInput onTextChange e: ", text);
    const newValue = text;
    //updateOption(id, newValue);
  };

  const saveOption = () => {
    toggleIsEdit(true);
    updateOption(id, option);
  };

  const editOption = () => {
    //updateOption(id, option);
    toggleIsEdit(false);
  };

  if (isEdit) {
    return (
      <Column customStyle={{ padding: 0, margin: 0 }}>
        <Row>
          <Button onClick={() => removeOption(id)}>
            <Trash size={20} />
          </Button>
          <Paragraph customStyle={{ width: "60%" }}>{option}</Paragraph>
          <Button onClick={() => editOption()}>Edit</Button>
        </Row>
      </Column>
    );
  }

  if (answer && answer === option) {
    return (
      <Column customStyle={{ padding: 0, margin: 0 }}>
        <Row>
          <Paragraph>{answer}</Paragraph>
        </Row>
      </Column>
    );
  }

  const checkTextAgainstAnswer = (text) => {
    if (text !== answer) {
      setOption(text);
    }
  };

  return (
    <Column customStyle={{ padding: 0, margin: 0 }}>
      <Row>
        <Button onClick={() => removeOption(id)}>
          <Trash size={20} />
        </Button>
        <TextArea
          value={option}
          onTextChange={checkTextAgainstAnswer}
          customStyle={{ width: "60%" }}
          rows={1}
        />
        <Button onClick={() => saveOption()}>Save</Button>
      </Row>
    </Column>
  );
};

export default OptionInput;
