import * as React from "react";
import { useState, useMemo } from "react";
import AddQuestion from "../";
import {
  Column,
  Row,
  Paragraph,
  TextInput,
  RadioGroup,
  MultipleChoice,
  TextAnswerInput,
} from "../../../../../../";
import { defaultQuesiton } from "../add-question";

const AddQuestionStory = () => {
  return (
    <Column>
      <AddQuestion />
    </Column>
  );
};

export default AddQuestionStory;
