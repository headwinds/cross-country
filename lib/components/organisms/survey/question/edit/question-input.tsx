import React from "react";
import {
  Column,
  SubHeadline,
  Paragraph,
  TextInput,
  Button,
} from "../../../../";
import AnswerInput from "./answer-input";

const QuestionInput = ({
  data,
  onChange,
  customClass = "border-2 border-gray-200 rounded-sm m-2", // to support Tailwind CSS or any css class
}) => {
  const { question, answer, name } = data;
  const hasAnswer = answer?.length > -1;

  return (
    <Column
      customStyle={{
        margin: 16,
        backgroundColor: "#eeebeb",
        borderRadius: 5,
        padding: 16,
      }}
    >
      <Paragraph customClass="m-2">{question}</Paragraph>
      {question ? (
        <TextInput
          placeholder={"Enter the question"}
          customClass={customClass}
          customStyle={{ width: "95%" }}
          onChange={onChange}
          name={name}
        />
      ) : null}
      {hasAnswer ? (
        <AnswerInput
          customClass={customClass}
          customStyle={{ width: "95%" }}
          onChange={onChange}
          name={`${name}_answer`}
        />
      ) : null}
      {!hasAnswer ? <Button>Add Answer?</Button> : null}
    </Column>
  );
};

export default QuestionInput;
