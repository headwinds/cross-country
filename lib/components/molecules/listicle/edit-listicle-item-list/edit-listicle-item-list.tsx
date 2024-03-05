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
} from "../../../";
import ListicleItemInput from "./listicle-item-input";
import { PlusSquare } from "@phosphor-icons/react";
import { editListicleItemListMachine } from "./edit-listicle-item-list-machine";
import { useMachine } from "@xstate/react";

const EditListicleItemList = ({
  data,
  onChange,
  isListicleItemListDisabled = false,
}) => {
  const { listicleItems, answer } = data;
  console.log("EditListicleItemList data: ", data);

  const [state, send] = useMachine(editListicleItemListMachine, {
    context: { listicleItems },
  });

  //console.log("EditListicleItemList data state.context: ", state.context);

  const addListicleItem = () => {
    send({
      type: "ADD_LISTICLE_ITEM",
    });
  };

  const removeListicleItem = (id) => {
    send({
      type: "REMOVE_LISTICLE_ITEM",
      id,
    });
  };
  // saved vs unsaved
  const updateListicleItem = (id, value, category) => {
    const updatedListicleItem = { id, value, category, status: "unsaved" };
    send({
      type: "UPDATE_LISTICLE_ITEM",
      data: updatedListicleItem,
    });
    // broadcast to parent that the listicle item has been created and filled out
    onChange({ event: "ADD_LISTICLE_ITEM", data: updatedListicleItem });
  };

  return (
    <Column
      customStyle={{
        padding: 0,
        pointerEvents: isListicleItemListDisabled ? "none" : "auto",
        opacity: isListicleItemListDisabled ? 0.5 : 1,
      }}
    >
      <Paragraph>Links</Paragraph>
      {state.context.listicleItems.map((option, index) => (
        <ListicleItemInput
          id={option.id}
          key={option.id}
          value={option.value}
          category={option.category}
          removeListicleItem={removeListicleItem}
          updateListicleItem={updateListicleItem}
          customStyle={{ width: "100%" }}
          answer={answer}
        />
      ))}
      <Row>
        <Button onClick={addListicleItem} customStyle={{ width: 50 }}>
          <PlusSquare size={20} />
        </Button>
      </Row>
    </Column>
  );
};

export default EditListicleItemList;
