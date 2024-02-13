// TODO: explore why I disabled typecheck on this file!
// @ts-nocheck
// npm run build

import React, { useState } from "react";
import { Column, SubHeadline, Paragraph, TextArea, Button } from "../../../../";
import AnswerInput from "./answer-input";

const QuestionAnswerInput = ({
  data,
  onChange,
  customClass = "border-2 border-gray-200 rounded-sm m-2", // to support Tailwind CSS or any css class
}) => {
  const [saveQuestion, setSaveQuestion] = useState("");
  const [saveAnswer, setSaveAnswer] = useState("");
  const { question, answer, name } = data;
  const hasAnswer = answer?.length > -1;

  const onClick = (data) => {
    console.log("QuestionInput saveQuestion: ", saveQuestion);
    const updatedData = { ...data, question: saveQuestion, answer: saveAnswer };
    const event = "UPDATE_QUESTION";
    const changeEvent = { data: updatedData, event };
    onChange(changeEvent);
  };

  return (
    <Column
      customStyle={{
        margin: 16,
        backgroundColor: "#eeebeb",
        borderRadius: 5,
        padding: 16,
      }}
    >
      <Paragraph customClass="m-2">What is the question?</Paragraph>

      <TextArea
        placeholder={"Enter text"}
        customClass={customClass}
        customStyle={{ width: "95%" }}
        value={saveQuestion}
        onTextChange={(text) => setSaveQuestion(text)}
        name={name}
      />

      <Paragraph customClass="m-2">What is the answer?</Paragraph>

      <TextArea
        placeholder={"Enter text"}
        customClass={customClass}
        customStyle={{ width: "95%" }}
        value={saveAnswer}
        onTextChange={(text) => setSaveAnswer(text)}
        name={name}
      />

      <Button onClick={(data) => onClick(data)}>Save</Button>
    </Column>
  );
};

export default QuestionAnswerInput;
