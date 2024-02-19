// TODO: explore why I disabled typecheck on this file!
// @ts-nocheck
// npm run build

import React, { useState, useEffect } from "react";
import {
  Column,
  SubHeadline,
  TextInput,
  Button,
  Row,
  Label,
  Paragraph,
} from "../../../../../";
import OptionInput from "./option-input";
import { PlusSquare } from "@phosphor-icons/react";
import { editOptionListMachine } from "./edit-option-list-machine";
import { useMachine } from "@xstate/react";

const EditOptionList = ({ data, onChange, isOptionListDisabled }) => {
  const { options, answer } = data;
  console.log("EditOptionList data: ", data);

  const [state, send] = useMachine(editOptionListMachine, {
    context: { options },
  });

  console.log("EditOptionList data state.context: ", state.context);

  useEffect(() => {
    console.log(
      "EditOptionList useEffect data changed so update the options: ",
      data
    );
    send({
      type: "UPDATE_OPTIONS",
      options: data.options,
    });
  }, [data]);

  if (!options || !Array.isArray(options)) {
    return null;
  }

  const addOption = () => {
    send({
      type: "ADD_OPTION",
    });
  };

  const removeOption = (id) => {
    send({
      type: "REMOVE_OPTION",
      id,
    });
  };

  const updateOption = (id, value) => {
    const updatedOption = { id, value };
    send({
      type: "UPDATE_OPTION",
      data: updatedOption,
    });
    onChange({ event: "EDIT_OPTION", data: updatedOption });
  };

  return (
    <Column
      customStyle={{
        padding: 0,
        pointerEvents: isOptionListDisabled ? "none" : "auto",
        opacity: isOptionListDisabled ? 0.5 : 1,
      }}
    >
      {state.context.options.map((option, index) => (
        <OptionInput
          id={option.id}
          key={option.id}
          value={option.value}
          removeOption={removeOption}
          updateOption={updateOption}
          customStyle={{ width: "100%" }}
          answer={answer}
        />
      ))}
      <Row>
        <Button onClick={addOption} customStyle={{ width: 50 }}>
          <PlusSquare size={20} />
        </Button>
      </Row>
      <Paragraph>
        The options will be automatically shuffled so you don't need to reorder
        them.
      </Paragraph>
    </Column>
  );
};

export default EditOptionList;
