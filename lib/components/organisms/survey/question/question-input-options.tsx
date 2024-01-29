import React, { useState } from "react";
import { Column, SubHeadline, TextInput, Button, Row, Label } from "../../../";
import OptionInput from "./option-input";
import QuestionInput from "./question-input";
import { PlusSquare } from "@phosphor-icons/react";

const QuestionInputWithOptions = ({ data, onChange, value = "hi" }) => {
  const [options, setOptions] = useState([
    { id: 0, value: "" },
    { id: 1, value: "" },
  ]);

  const addOption = () => {
    const newOption = { id: new Date().getTime(), value: "" };

    setOptions([...options, newOption]);
  };

  const removeOption = (id) => {
    const newOptions = options.filter((option) => option.id !== id);
    setOptions(newOptions);
  };

  return (
    <Column>
      <SubHeadline>Multiple Chocie Question</SubHeadline>
      <QuestionInput data={data} />
      {options.map((option, index) => (
        <OptionInput
          id={option.id}
          key={option.id}
          value={option.value}
          removeOption={removeOption}
          customStyle={{ width: "100%" }}
        />
      ))}
      <Row>
        <Button onClick={() => removeOption(id)}>
          <PlusSquare size={20} />
        </Button>
        <Label>Add Option</Label>
      </Row>
    </Column>
  );
};

export default QuestionInputWithOptions;
