import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  TextInput,
  RadioGroup,
  Column,
  Row,
  SubHeadline,
  Paragraph,
  Button,
} from "../../";

const defaultSubmit = (data) => {
  if (data) {
    return console.log("ReactHookForm defaultSubmit data: ", data);
  }
  console.log("ReactHookForm defaultSubmit no data!");
};

const ReactHookForm = ({ fields = [], submitForm = defaultSubmit }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = (data) => {
    submitForm(data);
  };

  const isDisabled = errors.length > 0;

  const fieldList = fields.map((field) => {
    switch (field.questionType) {
      case "multipleChoice":
        return (
          <Column key={field.name}>
            <SubHeadline>{field.question}</SubHeadline>
            <RadioGroup
              onChange={() => {}}
              question={field}
              selectedId={0}
              name={field.name}
              register={register}
            />
          </Column>
        );
      case "text":
      default:
        return (
          <Column key={field.name}>
            <SubHeadline>{field.question}</SubHeadline>
            <TextInput
              name={field.name}
              placeholder={field.placeholder}
              register={register}
              required={field.required}
              errorMessage={field.errorMessage}
            />
          </Column>
        );
    }
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {fieldList}

      <input type="submit" disabled={isDisabled} />
    </Form>
  );
};

export default ReactHookForm;
