import React, { useEffect, useMemo } from "react";
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
// edit the question
import AddQuestion from "./question/edit/add-question";
import EditQuestionList from "./question/edit/edit-question-list";

// machine
import { buildFormMachine } from "./build-form-machine";
import { useMachine } from "@xstate/react";
import type QuestionType from "./question/types";

const BuildForm = ({
  submitForm = defaultSubmit,
  headlineText = "Build your Form",
  onStateChange = null,
}) => {
  const [state, send] = useMachine(buildFormMachine);

  // state
  const questionTotal = state.context.questions.length > 1 ? "next" : "first";
  const firstQuestionInstruction = `Add your ${questionTotal} question`;

  const questions = state.context?.questions ?? [];

  const onChange = (changeEvent) => {
    console.log("BuildForm onChange changeEvent: ", changeEvent);
    const { data, event } = changeEvent;
    if (event === "delete") {
      console.log("BuildForm onChange dispatching REMOVE_QUESTION");
      send({ type: "REMOVE_QUESTION", question: data });
    }

    if (event === "save") {
      console.log("BuildForm onChange dispatching UPDATE_QUESTION");
      send({
        type: "UPDATE_QUESTION",
        question: { ...data, isComplete: true },
      });
    }
  };

  const errors = state.context.errors;
  const isDisabled = errors.length > 0;

  const handleAction = (data, question) => {
    console.log("BuildForm handleAction ", { data, question });
  };

  return (
    <Column>
      <Headline>{headlineText}</Headline>

      <EditQuestionList questions={questions} onChange={onChange} />

      <AddQuestion onChange={onChange} handleAction={handleAction} />

      <Paragraph>
        Submit is diabled until you have at least added a title
      </Paragraph>
      <TextInput type="submit" isDisabled={isDisabled} />
    </Column>
  );
};

export default BuildForm;
