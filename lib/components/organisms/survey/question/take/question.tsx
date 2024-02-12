import React from "react";
import { TextInput } from "../../../../";
import MultipleChoice from "./multiple-choice";
import TakeAnswerInput from "./take-answer-input";

type QuestionProps = {
  [x: string]: any;
  onTextChange: any;
  value: any;
  customClass?: string;
  customStyle?: {};
  placeholder?: string;
  type?: string;
  isDisabled?: boolean;
  name?: any;
  register?: any;
};

/*
Take a question!

see edit for creating/editing the question
*/

const Question = ({ data, register }: any) => {
  const { questionType } = data;

  const RenderQuestion = ({ data }) => {
    console.log("questionType: ", questionType);
    switch (questionType) {
      case "multipleChoice":
        return <MultipleChoice data={data} register={register} />;
      case "answerInput":
      default:
        return <TakeAnswerInput data={data} register={register} />;
    }
  };

  return <RenderQuestion data={data} />;
};

export default Question;
