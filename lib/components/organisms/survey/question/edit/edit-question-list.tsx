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
  const editQuestionList = useMemo(() => {
    return questions.map((question) => (
      <div key={question.id}>
        <EditQuestion data={question} onChange={onChange} />
      </div>
    ));
  }, [questions]);

  return <>{editQuestionList}</>;
};

export default EditQuestionList;
