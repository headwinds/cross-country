import React from "react";
import AnswerInput from "./answer-input";
import QuestionAnswerInput from "./question-answer-input";
import EditMultipleChoice from "./edit-multiple-choice";
import { QUESTION_VARIANTS } from "../types";

interface EditQuestionProps {
  onChange?: any;
  data?: any;
  hasDescription?: boolean;
}

const EditTitleInput = ({
  onChange,
  hasDescription = false,
}: EditQuestionProps) => {
  const titleData = {
    id: 1,
    name: "title",
    question: "What is the title?", // draft
    answer: null,
    placeholder: "Enter your question",
    isRequired: true,
    questionType: QUESTION_VARIANTS.ANSWER, // we only need the answer
    errorMessage: "A title is required",
    order: 1,
    userId: "1",
    section: "",
    isComplete: false,
    event: "UPDATE_TITLE",
  };

  const descriptionData = {
    id: 2,
    name: "title",
    question: "What is the description? (optional)", // draft
    answer: null,
    placeholder: "Enter your question",
    isRequired: false,
    questionType: QUESTION_VARIANTS.ANSWER, // we only need the answer
    errorMessage: "",
    order: 1,
    userId: "1",
    section: "",
    isComplete: false,
    event: "UPDATE_DESCRIPTION",
  };

  return (
    <>
      <AnswerInput data={titleData} onChange={onChange} />
      {hasDescription ? (
        <AnswerInput data={descriptionData} onChange={onChange} />
      ) : null}
    </>
  );
};

export default EditTitleInput;
