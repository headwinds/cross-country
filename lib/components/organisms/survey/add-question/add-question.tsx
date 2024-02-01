import React, { useState } from "react";
import {
  Column,
  Button,
  Row,
  Paragraph,
  TextInput,
  RadioGroup,
} from "../../../";
import QuestionInput from "../question/question-input";
import QuestionInputWithOptions from "../question/question-input-options";
import clsx from "clsx";
import type QuestionType from "../question/types";

const defaultState = {
  isOpen: false,
  questionType: "text",
};

/*
Flow

1. select either text or multiple choice
2. ask what is the question? 
*/

const AddQuestion = ({ register, data }) => {
  console.log("AddQuestion data: ", data);
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
        <Button onClick={onAddInputTextQuestion}>+ Input Text Question</Button>
        <Paragraph>OR</Paragraph>
        <Button onClick={onAddMultipleChoiceQuestion}>
          + Multipe Choise Question
        </Button>
      </Row>
    );
  }

  const getQuestionType = (questionType) => {
    switch (questionType) {
      case "multipleChoice":
        return <QuestionInputWithOptions data={data} register={register} />;
      case "text":
      default:
        return <QuestionInput data={data} register={register} />;
    }
  };

  const completeQueston = () => {
    const action = "complete";
    handleQuestionChange(data, action);
  };

  const cancelQuestion = () => {
    const action = "cancel";
    handleQuestionChange(data, action);
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
