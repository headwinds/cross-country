import React, { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";

interface Inputs {
  [key: string]: any; // This is a temporary solution - ideally define specific field types
}

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
we can use this survey to render and lean on react-hook-form to manage filling it out.
*/

const defaultSubmit = (data) => {
  if (data) {
    return console.log("FinalForm defaultSubmit data: ", data);
  }
  console.log("FinalForm defaultSubmit no data!");
};

export interface SurveyProps {
  submitForm?: (data: any) => void;
  onStateChange?: (data: any) => void;
  data: any;
}

const Survey = ({ submitForm = defaultSubmit, onStateChange = null, data }) => {
  //const [state, send] = useMachine(buildFormMachine);

  const {
    register, // applies the onChange handler automatically!
    handleSubmit,
    watch, // don't really need to watch anything - consider removing
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = (data) => {
    console.log("Survey onSubmit data: ", data);
    submitForm(data);
  };

  const isDisabled = true; //Object.keys(errors).length > 0:

  const onTextChange = (newText) => {
    console.log("FinalForm onTextChange newText: ", newText);
  };

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
          onTextChange={onTextChange}
        />
      ) : null}
    </Form>
  );
};

export default Survey;
