import React from "react";
import {
  Column,
  SubHeadline,
  Paragraph,
  TextInput,
  Button,
} from "../../../../";

const AnswerInput = ({
  data,
  onChange,
  customClass = "border-2 border-gray-200 rounded-sm m-2", // to support Tailwind CSS or any css class
}) => {
  if (!data) {
    console.log("AnswerInput bad data!");
    return null;
  }

  const { question, answer, name } = data;
  const hasAnswer = answer?.length > -1;

  return (
    <>
      <TextInput
        placeholder={"Enter the answer"}
        customClass={customClass}
        customStyle={{ width: "95%" }}
        onChange={onChange}
        name={`${name}_answer`}
      />
      <Paragraph customClass="m-2">
        You can leave the answer blank if it could be anything
      </Paragraph>
    </>
  );
};

export default AnswerInput;
