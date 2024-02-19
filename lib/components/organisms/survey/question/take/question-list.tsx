import React, { useMemo } from "react";
import Question from "./question";

type QuestionListProps = {
  questions: any[];
  register: any;
};

/*
When taking a question, we are using react-hook-form
*/

const QuestionList = ({ questions, register }: QuestionListProps) => {
  const questionList = useMemo(() => {
    return questions?.map((question) => (
      <div key={question.id}>
        <Question data={question} register={register} />
      </div>
    ));
  }, [questions]);

  return <>{questionList}</>;
};

export default QuestionList;
