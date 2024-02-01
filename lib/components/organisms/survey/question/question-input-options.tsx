import React, { useState } from "react";
import { Column, SubHeadline, TextInput, Button, Row, Label } from "../../../";
import OptionInput from "./option-input";
import QuestionInput from "./question-input";
import { PlusSquare } from "@phosphor-icons/react";

const QuestionInputWithOptions = ({ data, register }) => {
  const { options } = data;
  console.log("QuestionInputWithOptions data: ", data);

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

  /*
  Options might be considered a form within a form?!
  */

  return (
    <Column>
      <SubHeadline>Multiple Chocie Question</SubHeadline>
      <QuestionInput data={data} register={register} />
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

export default QuestionInputWithOptions;
