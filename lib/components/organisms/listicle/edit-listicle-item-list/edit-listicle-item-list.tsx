// TODO: explore why I disabled typecheck on this file!
// @ts-nocheck
// npm run build

import React, { useState, useEffect, useMemo } from "react";
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

type EditListicleItemListProps = {
  data: {
    listicleItems: Array<{
      id: number;
      url: string;
      category: string;
      status: string;
    }>;
    title: string;
  };
  isListicleItemListDisabled?: boolean;
};

const EditListicleItemList = ({
  data,
  isListicleItemListDisabled = false,
  send,
}: EditListicleItemListProps) => {
  const { listicleItems } = data;

  const addListicleItem = () => {
    send({
      type: "ADD_LISTICLE_ITEM",
    });
  };

  const removeListicleItem = (id) => {
    console.log("removeListicleItem id: ", id);
    send({
      type: "DELETE_LISTICLE_ITEM",
      id,
    });
  };

  const saveListicleItem = (saveListicleItem) => {
    console.log("updateListicleItem id: ", saveListicleItem);
    const { status } = saveListicleItem;

    if (status === "unsaved") {
      send({
        type: "SAVE_LISTICLE_ITEM",
        data: saveListicleItem,
      });
    }
  };

  const updateListicleItem = (updateListicleItem) => {
    console.log("updateListicleItem id: ", updateListicleItem);
    const { status } = updateListicleItem;

    if (status === "update") {
      send({
        type: "UPDATE_LISTICLE_ITEM",
        data: updateListicleItem,
      });
    }
  };

  const onChange = (changedListicleItem) => {
    const { status } = updateListicleItem;
    if (status === "update") {
      updateListicleItem(changedListicleItem);
    } else {
      saveListicleItem(changedListicleItem);
    }
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
      {listicleItems.map((item, index) => (
        <ListicleItemInput
          id={item.id}
          key={item.id}
          url={item.url}
          category={item.category}
          status={item.status}
          removeListicleItem={removeListicleItem}
          onChange={onChange}
          customStyle={{ width: "100%" }}
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
