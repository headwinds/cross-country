// TODO: explore why I disabled typecheck on this file!
// @ts-nocheck
// npm run build

import React, { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import {
  Headline,
  Form,
  TextInput,
  RadioGroup,
  Column,
  Row,
  SubHeadline,
  Paragraph,
  Button,
} from "../../";

import AddQuestion from "./question/edit/add-question";
import QuestionList from "./question/take/question-list";
import { buildFormMachine } from "./build-form-machine";
import { useMachine } from "@xstate/react";

/*
Once we have built the form and decided on all questions and their answers, 
we can use this final form to render and lean on react-hook-form to manage filling it out.
*/

const defaultSubmit = (data) => {
  if (data) {
    return console.log("FinalForm defaultSubmit data: ", data);
  }
  console.log("FinalForm defaultSubmit no data!");
};

// build the form fields from the fields array so it can work with react-hook-form
// but remove the submit button
const FinalForm = ({
  submitForm = defaultSubmit,
  onStateChange = null,
  data,
}) => {
  //const [state, send] = useMachine(buildFormMachine);

  console.log("FinalForm data: ", data);

  const {
    register, // applies the onChange handler automatically!
    handleSubmit,
    watch, // don't really need to watch anything - consider removing
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = (data) => {
    console.log("FinalForm onSubmit data: ", data);

    // I need to build up the answers for the form

    submitForm(data);

    // update the machine - each data is the answer
  };

  const isDisabled = true; //Object.keys(errors).length > 0:

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Headline>{data?.title ?? ""}</Headline>
      <SubHeadline>{data?.description ?? ""}</SubHeadline>
      <QuestionList questions={data?.questions} register={register} />

      {data?.questions.length > 0 ? (
        <TextInput
          type="submit"
          isDisabled={isDisabled}
          customStyle={{ width: 120 }}
        />
      ) : null}
    </Form>
  );
};

export default FinalForm;
