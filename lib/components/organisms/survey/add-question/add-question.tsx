import React, { useState } from "react";
import { Button, Row, Paragraph, TextInput, RadioGroup } from "../../../";
import QuestionInput from "../question/question-input";
import QuestionInputWithOptions from "../question/question-input-options";
import clsx from "clsx";

const defaultState = {
  isOpen: false,
  data: {
    id: null,
    name: `name-${new Date().getTime()}`,
    required: false,
    errorMessage: null,
    question: "what is the question?",
    options: ["yes", "no"],
    answer: "yes",
  },
  questionType: "text",
};

/*
Flow

1. select either text or multiple choice
2. ask what is the question? 
*/

const AddQuestion = ({ register, handleQuestionChange }) => {
  const [state, setState] = useState(defaultState);

  const { data, questionType } = state;

  const onChange = (e) => {
    console.log("Add Question change: ", e.target.value);
    //handleQuestionChange();
  };

  if (!state.isOpen) {
    return (
      <Row>
        <Button
          onClick={() =>
            setState({
              ...state,
              isOpen: true,
              questionType: "text",
            })
          }
        >
          + Input Text Question
        </Button>
        <Paragraph>OR</Paragraph>
        <Button
          onClick={() =>
            setState({
              ...state,
              isOpen: true,
              questionType: "multipleChoice",
            })
          }
        >
          + Multipe Choise Question
        </Button>
      </Row>
    );
  }

  const getQuestionType = (questionType) => {
    switch (questionType) {
      case "multipleChoice":
        return (
          <QuestionInputWithOptions
            data={data}
            register={register}
            name={data.name}
          />
        );
      case "text":
      default:
        return (
          <QuestionInput data={data} register={register} name={data.name} />
        );
    }
  };

  return <>{getQuestionType(questionType)}</>;
};

export default AddQuestion;
