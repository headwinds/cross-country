// TODO: explore why I disabled typecheck on this file!
// @ts-nocheck
// npm run build

import React, { useState } from "react";
import {
  Column,
  SubHeadline,
  TextInput,
  Button,
  Row,
  Label,
} from "../../../../";
import OptionInput from "./edit-option-list/option-input";
import QuestionAnswerInput from "./question-answer-input";
import EditOptionList from "./edit-option-list/edit-option-list";
import { PlusSquare } from "@phosphor-icons/react";

const EditMultipleChoice = ({ data, onChange }) => {
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
      <SubHeadline>Create Multiple Chocie Question</SubHeadline>
      <QuestionAnswerInput data={data} onChange={onChange} />
      <EditOptionList data={data} onChange={onChange} />
      <Row>
        <Button onClick={addOption}>
          <PlusSquare size={20} />
        </Button>
        <Label>Add Option</Label>
      </Row>
    </Column>
  );
};

export default EditMultipleChoice;
