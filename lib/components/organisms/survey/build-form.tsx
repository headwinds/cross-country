import React, { useEffect } from "react";
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
import QuestionInput from "./question/question-input";
import { buildFormMachine } from "./build-form-machine";
import { useMachine } from "@xstate/react";

const defaultSubmit = (data) => {
  if (data) {
    return console.log("ReactHookForm defaultSubmit data: ", data);
  }
  console.log("ReactHookForm defaultSubmit no data!");
};

const defaultFields = [
  {
    name: "title",
    question: "Enter a title for your survey",
    placeholder: "Enter your title",
    required: true,
    questionType: "text",
    errorMessage: "A title is required",
    order: 1,
    userId: "1",
    section: "",
  },
];

// build the form fields from the fields array so it can work with react-hook-form
// but remove the submit button
const BuildForm = ({
  fields = defaultFields,
  submitForm = defaultSubmit,
  headlineText = "Build your Form",
  onStateChange = null,
}) => {
  const [state, send] = useMachine(buildFormMachine);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = (data) => {
    console.log("BuildForm onSubmit data: ", data);

    submitForm(data);
  };

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      console.log("BuildForm Watching...", { value, name, type });

      if (name === "title") {
        //send("UPDATE_TITLE", { title: value });
        console.log("BuildForm useEffect send UPDATE_TITLE value: ", value);
        const data = value;
        send({ type: "UPDATE_TITLE", data });
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const isDisabled = errors.length > 0;

  // { onChange, question, selectedId = 0, name = "name", register = null }

  const handleQuestionChange = (question) => {
    // on question change, send the question to the machine with the right event:
    // ADD_QUESTION, UPDATE_QUESTION, DELETE_QUESTION
    console.log("BuildForm handleQuestionChange question: ", question);
    // based on the sate, send the right event
    console.log("BuildForm handleQuestionChange state: ", state);
    // what is the state of questions?
    // is this question in questions?
    /*
    const findQuestion = state.context.questions.find(
      (q) => q.id === question.id
    );
    if (findQuestion) {
      send("UPDATE_QUESTION", { question });
    } else {
      send("ADD_QUESTION", { question });
    }*/
    // if so, update it
    // if not, add it
  };

  useEffect(() => {
    console.log("BuildForm useEffect state: ", state);
    onStateChange(state);
  }, [state, onStateChange]);

  const surveryTitleInstruction = "Add your frist question";
  const firstQuestionInstruction = "Add your frist question";

  /*
  {
    question,
    type,
    onChange = null,
    value = "",
    placeholder = "",
    register,
    name = "example",
  }
  */

  //const on

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Headline>{headlineText}</Headline>
      <QuestionInput
        question="What is the title?"
        name="title"
        //value={value}
        register={register}
        // onChange={handleQuestionChange}
      />
      <Paragraph>{firstQuestionInstruction}</Paragraph>
      <AddQuestion handleQuestionChange />
      <Paragraph>Submit is diabled until you are done</Paragraph>
      <TextInput type="submit" isDisabled={isDisabled} />
    </Form>
  );
};

export default BuildForm;
