import React, { useState } from "react";
import {
  Column,
  SubHeadline,
  TextInput,
  Button,
  Row,
  Label,
} from "../../../../";
import OptionInput from "./option-input";

const MultipleChoice = ({ data, onChange }) => {
  const { options } = data;
  console.log("QuestionInputWithOptions data: ", data);

  if (!options || !Array.isArray(options)) {
    return null;
  }

  const onQuestionChange = (question) => {};

  /*
  Options might be considered a form within a form?!
  */

  return (
    <Column>
      <SubHeadline>Take Multiple Chocie Question</SubHeadline>
    </Column>
  );
};

export default MultipleChoice;
