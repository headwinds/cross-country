import React, { useState } from "react";
import { Button, Row, Paragraph, TextInput, RadioGroup } from "../../../";
import QuestionInput from "../question/question-input";
import QuestionInputWithOptions from "../question/question-input-options";
import clsx from "clsx";

const defaultState = {
  isOpen: false,
  questionType: "text",
};

/*
Flow

1. select either text or multiple choice
2. ask what is the question? 
*/

const AddQuestion = ({ register, handleQuestionChange, data }) => {
  console.log("AddQuestion data: ", data);
  const [state, setState] = useState(defaultState);

  const { questionType } = state;

  const onChange = (data: QuestionType) => {
    console.log("AddQuestion onChange data: ", data);
    handleQuestionChange(data);
  };

  if (!state.isOpen) {
    return (
      <Row>
        <Button
          onClick={() =>
            setState({
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
            onChange={onChange}
          />
        );
      case "text":
      default:
        return (
          <QuestionInput
            data={data}
            register={register}
            name={data.name}
            onChange={onChange}
          />
        );
    }
  };

  return <>{getQuestionType(questionType)}</>;
};

export default AddQuestion;
