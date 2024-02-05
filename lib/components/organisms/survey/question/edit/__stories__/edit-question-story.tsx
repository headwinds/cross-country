import * as React from "react";
import { useState, useMemo } from "react";
import Question from "../../take/question";
import EditQuestion from "../edit-question";
import { Form, Row, Paragraph, TextInput, RadioGroup } from "../../../../../";
import { useForm } from "react-hook-form";

const defaultQuesiton = {
  id: null,
  name: `name-${new Date().getTime()}`,
  required: false,
  errorMessage: null,
  question: "what is the question?",
  options: [
    { id: 0, value: "yes" },
    { id: 1, value: "no" },
  ],
  answer: "yes",
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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    console.log("QuestionStory submit");
  };

  const handleQuestionChange = (question) => {
    // this is not the text (answer) change which is handled by register but some other action
    console.log("AddQuestionStory handleQuestionChange question: ", question);
    setData(question);
    // this is where you would update the question in the parent component
    // see the build form story for how to handle the question change
  };

  return (
    <>
      <Paragraph>Create & Edit the question</Paragraph>
      <EditQuestion
        register={register}
        handleQuestionChange={handleQuestionChange}
        data={data}
      />
      <Paragraph>Watch the question grow</Paragraph>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Question
          register={register}
          handleQuestionChange={handleQuestionChange}
          data={data}
        />
      </Form>
    </>
  );
};

export default EditQuestionStory;
