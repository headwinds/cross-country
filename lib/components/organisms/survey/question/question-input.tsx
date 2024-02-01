import React from "react";
import { Column, SubHeadline, Paragraph, TextInput, Button } from "../../../";

const QuestionInput = ({
  data,
  register,
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
          register={register}
          name={name}
        />
      ) : null}
      {hasAnswer ? (
        <>
          <TextInput
            placeholder={"Enter the answer"}
            customClass={customClass}
            customStyle={{ width: "95%" }}
            register={register}
            name={`${name}_answer`}
          />
          <Paragraph customClass="m-2">
            You can leave the answer blank if it could be anything
          </Paragraph>
        </>
      ) : null}
      {!hasAnswer ? <Button>Add Answer?</Button> : null}
    </Column>
  );
};

export default QuestionInput;
