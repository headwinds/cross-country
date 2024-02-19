// TODO: explore why I disabled typecheck on this file!
// @ts-nocheck
// npm run build

import React from "react";
import {
  Row,
  Column,
  SubHeadline,
  Paragraph,
  TextInput,
  Button,
} from "../../../../../";
import { Trash, CheckSquare } from "@phosphor-icons/react";

const AnswerInput = ({
  data,
  register,
  customClass = "border-2 border-gray-200 rounded-sm m-2", // to support Tailwind CSS or any css class
  onChange = null,
}) => {
  const { question, answer, name, isRequired } = data;

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
        placeholder={"Enter the answer"}
        onTextChange={(text) => onChange(text, true)}
        customClass={customClass}
        customStyle={{ width: "95%" }}
        register={register}
        name={name}
      />
      <Row>
        <Button
          onClick={() =>
            onChange({
              data: { ...data, isComplete: true },
              event: "save",
            })
          }
          customStyle={{ width: 50 }}
        >
          <CheckSquare size={20} />
        </Button>

        {!isRequired ? (
          <Button
            onClick={() =>
              onChange({
                data,
                event: "delete",
              })
            }
            customStyle={{ width: 50 }}
          >
            <Trash size={20} />
          </Button>
        ) : null}
      </Row>
    </Column>
  );
};

export default AnswerInput;
