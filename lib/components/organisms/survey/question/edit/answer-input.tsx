// TODO: explore why I disabled typecheck on this file!
// @ts-nocheck
// npm run build

import React, { useState } from "react";
import {
  Column,
  SubHeadline,
  Paragraph,
  TextInput,
  TextArea,
  Button,
  Row,
} from "../../../../";
import {
  Trash,
  CheckSquare,
  PencilSimple,
  XSquare,
} from "@phosphor-icons/react";

const AnswerInput = ({
  data,
  onChange,
  customClass = "border-2 border-gray-200 rounded-sm m-2", // to support Tailwind CSS or any css class
}) => {
  const [saveAnswer, setSaveAnswer] = useState("");
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
        <Button
          onClick={(data) => onEditClick(data)}
          customStyle={{ width: 50 }}
        >
          <PencilSimple size={20} />
        </Button>
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
      <TextArea
        placeholder={"Enter the answer"}
        customClass={customClass}
        customStyle={{ width: "95%" }}
        value={saveAnswer}
        onTextChange={(text) => setSaveAnswer(text)}
        name={`${name}_answer`}
      />
      <Paragraph customClass="m-2">
        You can leave the answer blank if it could be anything
      </Paragraph>
      <Row>
        <Button
          onClick={(data) => onSaveClick(data)}
          customStyle={{ width: 50 }}
        >
          <CheckSquare size={20} />
        </Button>
        {!isRequired ? (
          <Button
            onClick={(data) => onSkipClick(data)}
            customStyle={{ width: 50 }}
          >
            <XSquare size={20} />
          </Button>
        ) : null}
      </Row>
    </Column>
  );
};

export default AnswerInput;
