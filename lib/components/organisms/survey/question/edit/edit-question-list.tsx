import React, { useMemo } from "react";
import EditQuestion from "./edit-question";

type EditQuestionListProps = {
  questions: any[];
  onChange: any;
};

/*
When editting a question, we are using xstate
*/

const EditQuestionList = ({ questions, onChange }: EditQuestionListProps) => {
  console.log("EditQuestionList questions: ", questions);

  const questionsWithoutAnswers = questions
    ? questions.filter((question) => question.answer === null)
    : [];

  const editQuestionList = useMemo(() => {
    return questionsWithoutAnswers.map((question) => (
      <div key={question.id}>
        <EditQuestion data={question} onChange={onChange} />
      </div>
    ));
  }, [questionsWithoutAnswers]);

  return <>{editQuestionList}</>;
};

export default EditQuestionList;
