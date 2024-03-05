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
  Paragraph,
} from "../../../../";
import OptionInput from "./edit-option-list/option-input";
import QuestionAnswerInput from "./question-answer-input";
import EditOptionList from "./edit-option-list/edit-option-list";
import { PlusSquare } from "@phosphor-icons/react";

const EditMultipleChoice = ({ data, onChange }) => {
  const { options, answer } = data;
  console.log("QuestionInputWithOptions data: ", data);

  if (!options || !Array.isArray(options)) {
    return null;
  }

  const isOptionListDisabled = answer === "";

  return (
    <Column>
      <SubHeadline>Create Multiple Chocie Question</SubHeadline>
      <QuestionAnswerInput data={data} onChange={onChange} isMultipleChoice />
      {isOptionListDisabled ? (
        <Paragraph>
          Once you add answer, then you can add more options.
        </Paragraph>
      ) : null}
      <EditOptionList
        data={data}
        onChange={onChange}
        isOptionListDisabled={isOptionListDisabled}
      />
    </Column>
  );
};

export default EditMultipleChoice;
