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

import AddQuestion from "./add-question";
import Question from "./question";
import QuestionList from "./question-list";
import QuestionInput from "./question/question-input";
import { buildFormMachine } from "./build-form-machine";
import { useMachine } from "@xstate/react";
import type QuestionType from "./question/types";

/*
Once we have built the form and decided on all questions and their answers, 
we can use this final form to render and lean on react-hook-form to manage filling it out.
*/

const defaultSubmit = (data) => {
  if (data) {
    return console.log("ReactHookForm defaultSubmit data: ", data);
  }
  console.log("ReactHookForm defaultSubmit no data!");
};

// build the form fields from the fields array so it can work with react-hook-form
// but remove the submit button
const BuildForm = ({
  submitForm = defaultSubmit,
  headlineText = "Build your Form",
  onStateChange = null,
}) => {
  const [state, send] = useMachine(buildFormMachine);

  // state
  const questionTotal = state.context.questions.length > 1 ? "next" : "first";
  const firstQuestionInstruction = `Add your ${questionTotal} question`;

  // we add one question at anytime so the addQuestion draft data should be the last question
  const questions = state.context?.questions ?? [];
  // is the title quesiton complete?
  //const hasNextQuestion = questions[0].isComplete;
  //const nextQuestionData = hasNextQuestion ? [...questions].pop() : null;
  //

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = (data) => {
    console.log("BuildForm onSubmit data: ", data);

    // I need to build up the answers for the form

    submitForm(data);

    // update the machine - each data is the answer
  };

  const onSubscription = (changedValue, name, type) => {
    console.log("BuildForm onSubscription...", { changedValue, name, type });

    const question = questions.find((q) => q.name === name);
    console.log("BuildForm onSubscription questions: ", questions);
    console.log("BuildForm onSubscription question: ", question);

    if (question) {
      send({
        type: "UPDATE_QUESTION",
        question: { ...question, answer: changedValue },
      });
    }

    //}
  };

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

  /*


   useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      const changedValue = value[name];
      onSubscription(changedValue, name, type);
    });

    return () => subscription.unsubscribe();
  }, [watch]);


  useEffect(() => {
    console.log("BuildForm useEffect state: ", state);
    onStateChange(state);
  }, [state, onStateChange]);

  */
  const isDisabled = errors.length > 0;

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Headline>{headlineText}</Headline>
      <QuestionList
        questions={questions}
        register={register}
        onChange={onChange}
      />

      <AddQuestion register={register} />

      <Paragraph>
        Submit is diabled until you have at least added a title
      </Paragraph>
      <TextInput type="submit" isDisabled={isDisabled} />
    </Form>
  );
};

export default BuildForm;
