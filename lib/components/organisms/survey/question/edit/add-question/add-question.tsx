// TODO: explore why I disabled typecheck on this file!
// @ts-nocheck
// npm run build

import React, { useState } from "react";
import {
  Column,
  Button,
  Row,
  Paragraph,
  TextInput,
  RadioGroup,
  Question,
} from "../../../../../";
import QuestionAnswerInput from "../question-answer-input";
import EditMultipleChoice from "../edit-multiple-choice";
import clsx from "clsx";
import { defaultQuestionData } from "../../../build-form-machine";
import type { QuestionType } from "../../types";

type ChangeEvent = {
  event: string;
  data: QuestionType;
};

export const defaultQuesiton = {
  id: null,
  name: `name-${new Date().getTime()}`,
  required: false,
  errorMessage: null,
  question: "what is the question?",
  options: [],
  answer: "",
  questionType: "multipleChoice",
};

const defaultState = {
  isOpen: false,
  questionType: "text",
};

const AddQuestion = () => {
  const [data, setData] = useState({ ...defaultQuesiton });
  const [selectedId, setSelectedId] = useState(null);
  const [state, setState] = useState({ ...defaultState });
  const [validationMessage, setValidationMessage] = useState("");

  const { questionType } = state;

  const onAddInputTextQuestion = () => {
    setState({
      isOpen: true,
      questionType: "text",
    });
  };

  const onAddMultipleChoiceQuestion = () => {
    setState({
      isOpen: true,
      questionType: "multipleChoice",
    });
  };

  const onChange = (changeEvent: ChangeEvent) => {
    console.log("AddQuestion obj changeEvent: ", changeEvent);

    if (changeEvent.event === "EDIT_OPTION") {
      const updatedOption = changeEvent.data;
      console.log(
        "AddQuestionStory EDIT_OPTION... updatedOption: ",
        updatedOption
      );
      const newOptions = [...data.options, updatedOption];
      return setData({ ...data, options: newOptions });
      //
    }

    if (changeEvent.event === "COMPLETE") {
      const newSelectedId = changeEvent.data.options[0].id;
      setSelectedId(newSelectedId);
      return setData(changeEvent.data);
    }

    if (changeEvent.event === "UPDATE_MULTIPLE_CHOICE_QUESTION") {
      //const newOptions = [...data.options];
      //const id = `option_${new Date().getTime()}`;
      //newOptions.push({ id, value: "" });
      //setData({ ...data, options: [] });

      // do I need to update the answer option?
      const { answer } = changeEvent.data;
      if (answer && answer !== "") {
        // is the answer already in the options?
        const hasAnswer = !!changeEvent.data.options.find(
          (option) => option.value === answer
        );
        if (!hasAnswer) {
          const id = `option_${new Date().getTime()}`;
          const answerOption = { id, value: answer };
          const newOptions = [...changeEvent.data.options, answerOption];
          return setData({ ...changeEvent.data, options: newOptions });
        }
      }

      return setData(changeEvent.data);
    }
  };

  const getIsQuestionComplete = () => {
    const { questionType, options, answer, question } = data;

    if (
      questionType === "multipleChoice" &&
      options.length > 1 &&
      answer !== "" &&
      question !== ""
    ) {
      return true;
    } else if (
      questionType === "textInput" &&
      answer !== "" &&
      question !== ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  const isQuestionComplete = getIsQuestionComplete();

  const onFinalQuestionChange = () => {};

  console.log("AddQuestion render ", { isQuestionComplete, data });

  if (!state.isOpen) {
    if (isQuestionComplete) {
      return (
        <Column customStyle={{ padding: 0, margin: 0 }}>
          <Question data={data} onChange={onFinalQuestionChange} />
        </Column>
      );
    }

    return (
      <Row>
        <Button onClick={onAddInputTextQuestion} customStyle={{ width: 160 }}>
          Input Answer
        </Button>
        <Paragraph>OR</Paragraph>
        <Button
          onClick={onAddMultipleChoiceQuestion}
          customStyle={{ width: 160 }}
        >
          Multipe Choice
        </Button>
      </Row>
    );
  }

  const getQuestionType = (questionType) => {
    switch (questionType) {
      case "multipleChoice":
        return <EditMultipleChoice data={data} onChange={onChange} />;
      case "text":
      default:
        return <QuestionAnswerInput data={data} onChange={onChange} />;
    }
  };

  const completeQueston = () => {
    setState({ ...state, isOpen: false });

    // is it valid?
    const { question, answer, options, questionType } = data;

    if (questionType === "multipleChoice") {
      if (question !== "" && answer !== "" && options.length > 1) {
        const event = "COMPLETE";
        const changeEvent = { data, event };
        onChange(changeEvent);
      }

      if ((answer !== "") & (options.length < 2)) {
        setValidationMessage("You need at least 1 more option");
      }
    }
  };

  const cancelQuestion = () => {
    setState({ ...state, isOpen: false });

    const event = "CANCEL";
    const changeEvent = { data, event };
    onChange(changeEvent);
  };

  return (
    <Column customStyle={{ padding: 0, margin: 0 }}>
      {getQuestionType(questionType)}
      <Row>
        <Button
          onClick={completeQueston}
          customStyle={{
            opacity: isQuestionComplete ? 1 : 0.5,
            pointerEvents: isQuestionComplete ? "auto" : "none",
          }}
        >
          Complete
        </Button>
        <Button onClick={cancelQuestion}>Cancel</Button>
      </Row>
      <Paragraph customStyle={{ color: "red" }}>{validationMessage}</Paragraph>
    </Column>
  );
};

export default AddQuestion;
