import * as React from "react";
import { useState, useMemo } from "react";
import AddQuestion from "../";
import { Form, Row, Paragraph, TextInput, RadioGroup } from "../../../../";
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

const AddQuestionStory = () => {

  const [data, setData] = useState({ ...defaultQuesiton });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    console.log("AddQuestionStory submit");
  };

  const handleQuestionChange = (question) => {
    console.log("AddQuestionStory handleQuestionChange question: ", question);
    setData(question);
    // this is where you would update the question in the parent component
    // see the build form story for how to handle the question change
  };


  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <AddQuestion
        register={register}
        handleQuestionChange={handleQuestionChange}
        data={data}
      />
    </Form>
  );
};

export default AddQuestionStory;
