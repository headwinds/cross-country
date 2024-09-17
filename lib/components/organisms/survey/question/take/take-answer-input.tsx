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
import { PencilSimple, CheckCircle } from "@phosphor-icons/react";
import InputManager from "./inputs/input-manager";

interface TakeAnswerInputProps {
  data: any;
  onChange: (data: any) => void;
  customClass?: string;
  hasSave?: boolean;
  variant?: "text" | "date-time";
  placeholder?: string;
  selectedId?: string;
}

const TakeAnswerInput = ({
  data,
  onChange,
  customClass = "border-2 border-gray-200 rounded-sm m-2", // to support Tailwind CSS or any css class
  hasSave = false,
  variant = "text",
  placeholder = "Enter the answer",
  selectedId,
}: TakeAnswerInputProps) => {
  const [saveAnswer, setSaveAnswer] = useState<string | null>(
    selectedId | null
  );
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
      <InputManager
        variant={variant}
        data={data}
        placeholder={placeholder}
        customClass={customClass}
        customStyle={{ width: "95%" }}
        onTextChange={(text) => setSaveAnswer(text)}
        defaultValue={saveAnswer}
      />
      {hasSave ? (
        <Button
          onClick={(data) => onSaveClick(data)}
          customStyle={{ width: 50 }}
        >
          <CheckCircle size={20} />
        </Button>
      ) : null}
    </Column>
  );
};

export default TakeAnswerInput;
