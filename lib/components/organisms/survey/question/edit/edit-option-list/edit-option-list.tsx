import React, { useState } from "react";
import {
  Column,
  SubHeadline,
  TextInput,
  Button,
  Row,
  Label,
} from "../../../../../";
import OptionInput from "./option-input";
import { PlusSquare } from "@phosphor-icons/react";

const EditOptionList = ({ data }) => {
  const { options } = data;
  console.log("EditOptionList data: ", data);

  if (!options || !Array.isArray(options)) {
    return null;
  }

  const addOption = () => {
    const newOption = { id: options.length, value: "" };
    const newOptions = [...data.options, newOption];

    const updatedData = { ...data, options: newOptions };
  };

  const removeOption = (id) => {
    const newOptions = options.filter((option) => option.id !== id);
  };

  const updateOption = (id, newValue) => {
    const newOptions = options.map((option) => {
      if (option.id === id) {
        return { ...option, value: newValue };
      }
      return option;
    });
  };

  const onQuestionChange = (question) => {};

  return (
    <Column customStyle={{ padding: 0 }}>
      {options.map((option, index) => (
        <OptionInput
          id={option.id}
          key={option.id}
          value={option.value}
          removeOption={removeOption}
          updateOption={updateOption}
          customStyle={{ width: "100%" }}
        />
      ))}
      <Row>
        <Button onClick={addOption}>
          <PlusSquare size={20} />
        </Button>
        <Label>Add Option</Label>
      </Row>
    </Column>
  );
};

export default EditOptionList;