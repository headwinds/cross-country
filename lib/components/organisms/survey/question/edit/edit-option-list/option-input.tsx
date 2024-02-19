import React, { useState } from "react";
import {
  Column,
  Row,
  Button,
  SubHeadline,
  TextArea,
  Paragraph,
} from "../../../../../";
import { Trash, CheckSquare, PencilSimple } from "@phosphor-icons/react";
import Option from "./option";

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
          <Option data={{ value: option, id }} />
          <Button
            onClick={() => removeOption(id)}
            customStyle={{ width: 50 }}
          ></Button>
          <Button onClick={() => editOption()} customStyle={{ width: 50 }}>
            <PencilSimple size={20} />
          </Button>
        </Row>
      </Column>
    );
  }

  if (answer && answer === option) {
    const data = { id, value: answer };
    return (
      <Column customStyle={{ padding: 0, margin: 0 }}>
        <Option data={data} />
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
        <TextArea
          value={option}
          onTextChange={checkTextAgainstAnswer}
          customStyle={{ width: "60%" }}
          rows={1}
        />
        <Button onClick={() => removeOption(id)} customStyle={{ width: 50 }}>
          <Trash size={20} />
        </Button>
        <Button onClick={() => saveOption()} customStyle={{ width: 50 }}>
          <CheckSquare size={20} />
        </Button>
      </Row>
    </Column>
  );
};

export default OptionInput;
