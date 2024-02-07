import React from "react";
import { TextInput } from "../../../../";
import MultipleChoice from "./multiple-choice";

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

const Question = ({ data, register, ...rest }: any) => {
  const { questionType } = data;

  const RenderQuestion = ({ data }) => {
    switch (questionType) {
      case "multipleChoice":
        return <MultipleChoice data={data} register={register} {...rest} />;
      case "text":
      default:
        return <TextInput data={data} register={register} {...rest} />;
    }
  };

  return <RenderQuestion data={data} />;
};

export default Question;
