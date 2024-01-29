import * as React from "react";
import AddQuestion from "../";
import { Form, Row, Paragraph, TextInput, RadioGroup } from "../../../../";
import { useForm } from "react-hook-form";

const AddQuestionStory = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    console.log("AddQuestionStory submit");
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <AddQuestion register={register} />
    </Form>
  );
};

export default AddQuestionStory;
