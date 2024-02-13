// TODO: explore why I disabled typecheck on this file!
// @ts-nocheck
// npm run build

import React, { useState } from "react";
import {
  Column,
  Button,
  Row,
  Paragraph,
  TextInput,
  RadioGroup,
} from "../../../../../";
import QuestionAnswerInput from "../question-answer-input";
import EditMultipleChoice from "../edit-multiple-choice";
import clsx from "clsx";
import { defaultQuestionData } from "../../../build-form-machine";

const defaultState = {
  isOpen: false,
  questionType: "text",
};

/*
Flow

1. select either text or multiple choice
2. ask what is the question? 
*/

const AddQuestion = ({ onChange, data = defaultQuestionData }) => {
  const [state, setState] = useState({ ...defaultState });

  const { questionType } = state;

  const onAddInputTextQuestion = () => {
    setState({
      isOpen: true,
      questionType: "text",
    });
  };

  const onAddMultipleChoiceQuestion = () => {
    setState({
      isOpen: true,
      questionType: "multipleChoice",
    });
  };

  if (!state.isOpen) {
    return (
      <Row>
        <Button onClick={onAddInputTextQuestion} customStyle={{ width: 160 }}>
          Input Answer
        </Button>
        <Paragraph>OR</Paragraph>
        <Button
          onClick={onAddMultipleChoiceQuestion}
          customStyle={{ width: 160 }}
        >
          Multipe Choice
        </Button>
      </Row>
    );
  }

  const getQuestionType = (questionType) => {
    switch (questionType) {
      case "multipleChoice":
        return <EditMultipleChoice data={data} onChange={onChange} />;
      case "text":
      default:
        return <QuestionAnswerInput data={data} onChange={onChange} />;
    }
  };

  const completeQueston = () => {
    setState({ ...state, isOpen: false });
    const action = "complete";
    const changeEvent = { data, action };
    onChange(changeEvent);
  };

  const cancelQuestion = () => {
    setState({ ...state, isOpen: false });

    const action = "cancel";
    const changeEvent = { data, action };
    onChange(changeEvent);
  };

  return (
    <Column customStyle={{ padding: 0, margin: 0 }}>
      {getQuestionType(questionType)}
      <Row>
        <Button onClick={completeQueston}>Complete</Button>
        <Button onClick={cancelQuestion}>Cancel</Button>
      </Row>
    </Column>
  );
};

export default AddQuestion;
