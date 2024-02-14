import * as React from "react";
import { useState, useMemo } from "react";
import Question from "../../take/question";
import EditQuestion from "../edit-question";
import { Form, Row, Paragraph, TextInput, RadioGroup } from "../../../../../";

const defaultQuesiton = {
  id: null,
  name: `name-${new Date().getTime()}`,
  required: false,
  errorMessage: null,
  question: "what is the question?",
  options: [],
  answer: "",
};

const EditQuestionStory = ({
  question = "what is the question?",
  questionType = "text",
}) => {
  const [data, setData] = useState({
    ...defaultQuesiton,
    question,
    questionType,
  });

  const onSubmit = () => {
    console.log("QuestionStory submit");
  };

  const onChange = (question) => {
    console.log("EditQuestionStory question: ", question);
  };

  return (
    <>
      <Paragraph>Create & Edit the question</Paragraph>
      <EditQuestion onChange={onChange} data={data} />
    </>
  );
};

export default EditQuestionStory;
