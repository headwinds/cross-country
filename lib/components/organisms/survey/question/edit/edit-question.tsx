import React from "react";
import AnswerInput from "./answer-input";
import QuestionInput from "./question-input";
import EditMultipleChoice from "./edit-multiple-choice";

interface EditQuestionProps {
  onChange: any;
  data: any;
}

const EditQuestion = ({ data, onChange }: EditQuestionProps) => {
  const { questionType } = data;

  const RenderQuestion = ({ data }) => {
    switch (questionType) {
      case "answerInput":
        return <AnswerInput data={data} onChange={onChange} />;
      case "multipleChoice":
        return <EditMultipleChoice data={data} onChange={onChange} />;
      case "text":
      default:
        return <QuestionInput data={data} onChange={onChange} />;
    }
  };

  return <RenderQuestion data={data} />;
};

export default EditQuestion;
