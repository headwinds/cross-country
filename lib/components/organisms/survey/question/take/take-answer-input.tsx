// TODO: explore why I disabled typecheck on this file!
// @ts-nocheck
// npm run build

import React, { useState } from "react";
import {
  Column,
  SubHeadline,
  Paragraph,
  TextInput,
  Button,
  Row,
} from "../../../../";

const TakeAnswerInput = ({
  data,
  register,
  customClass = "border-2 border-gray-200 rounded-sm m-2", // to support Tailwind CSS or any css class
}) => {
  const [saveAnswer, setSaveAnswer] = useState(null);
  const [isSaved, toggleIsSaved] = useState(false);

  const onSaveClick = () => {
    const updatedData = { ...data, answer: saveAnswer };
    const event = data?.event ?? "UPDATE_ANSWER";
    const changeEvent = { data: updatedData, event };
    //

    toggleIsSaved(true);
    onChange(changeEvent);
  };

  const onEditClick = () => {
    toggleIsSaved(false);
  };

  const onSkipClick = () => {};

  const { question, answer, name, isRequired } = data;
  const hasAnswer = answer?.length > -1;

  // either editing

  if (isSaved) {
    return (
      <Column
        customStyle={{
          margin: 16,
          backgroundColor: "#eeebeb",
          borderRadius: 5,
          padding: 16,
        }}
      >
        <Paragraph customClass="m-2">{saveAnswer}</Paragraph>
        <Button onClick={(data) => onEditClick(data)}>Edit</Button>
      </Column>
    );
  }

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
      <TextInput
        data={data}
        placeholder={"Enter the answer"}
        customClass={customClass}
        customStyle={{ width: "95%" }}
        //onTextChange={(text) => setSaveAnswer(text)}
        register={register}
      />
    </Column>
  );
};

export default TakeAnswerInput;
