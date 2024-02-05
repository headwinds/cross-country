import React from "react";
import { TextInput } from "../../../../";
import MultipleChoice from "./multiple-choice";

interface QuestionProps {
  question: string;
  // what is the react hook form type for register?
  register: any;
}

/*
Take a question!

see edit for creating/editing the question
*/

const Question = ({ data, register }: QuestionProps) => {
  const { questionType } = data;

  const RenderQuestion = ({ data }) => {
    switch (questionType) {
      case "multipleChoice":
        return <MultipleChoice data={data} register={register} />;
      case "text":
      default:
        return <TextInput data={data} register={register} />;
    }
  };

  return <RenderQuestion data={data} />;
};

export default Question;
