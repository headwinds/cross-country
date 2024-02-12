import React from "react";
import AnswerInput from "./answer-input";
import QuestionAnswerInput from "./question-answer-input";
import EditMultipleChoice from "./edit-multiple-choice";

interface EditQuestionProps {
  onChange: any;
  data: any;
}

const EditQuestion = ({ data, onChange }: EditQuestionProps) => {
  const { questionType } = data;

  console.log("questionType: ", questionType);
  const RenderQuestion = ({ data }) => {
    switch (questionType) {
      case "answerInput":
        return <AnswerInput data={data} onChange={onChange} />;
      case "multipleChoiceInput":
        return <EditMultipleChoice data={data} onChange={onChange} />;
      case "questionAnswerInput":
      default:
        return <QuestionAnswerInput data={data} onChange={onChange} />;
    }
  };

  return <RenderQuestion data={data} />;
};

export default EditQuestion;
