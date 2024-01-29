import React, { useState } from "react";
import { Button, Row, Paragraph, TextInput, RadioGroup } from "../../../";
import QuestionInput from "../question/question-input";
import QuestionInputWithOptions from "../question/question-input-options";
import clsx from "clsx";

const defaultState = {
  isOpen: false,
  question: {
    id: null,
    name: "",
    placeholder: null,
    required: false,
    errorMessage: null,
    questionType: "text",
    prompt: "what is the question?",
    options: ["yes", "no"],
    answer: "yes",
  },
};

/*
Flow

1. select either text or multiple choice
2. ask what is the question? 
*/

const AddQuestion = ({ register, handleQuestionChange }) => {
  const [state, setState] = useState(defaultState);

  const { question } = state;

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
              question: { ...question, questionType: "text" },
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
              question: { ...question, questionType: "multipleChoice" },
            })
          }
        >
          + Multipe Choise Question
        </Button>
      </Row>
    );
  }

  const getQuestionType = (question) => {
    switch (question.questionType) {
      case "multipleChoice":
        return (
          <QuestionInputWithOptions
            question={question}
            type={question.questionType}
            placeholder={null}
            register={register}
            name={question.name}
          />
        );
      case "text":
      default:
        return (
          <QuestionInput
            question={question}
            type={question.questionType}
            placeholder={null}
            register={register}
            name={question.name}
          />
        );
    }
  };

  const handleNext = () => {};

  return <>{getQuestionType(question)}</>;
};

export default AddQuestion;
