import React from "react";
import AnswerInput from "../answer";
import QuestionInput from "./question-input";
import QuestionInputWithOptions from "./question-input-options";

interface QuestionProps {
  question: string;
  // what is the react hook form type for register?
  register: any;
}

const Question = ({ data, register, onChange }: QuestionProps) => {
  const { questionType } = data;

  const RenderQuestion = ({ data }) => {
    switch (questionType) {
      case "answerInput":
        return (
          <AnswerInput data={data} register={register} onChange={onChange} />
        );
      case "multipleChoice":
        return (
          <QuestionInputWithOptions
            data={data}
            register={register}
            onChange={onChange}
          />
        );
      case "text":
      default:
        return (
          <QuestionInput data={data} register={register} onChange={onChange} />
        );
    }
  };

  return <RenderQuestion data={data} />;
};

export default Question;
