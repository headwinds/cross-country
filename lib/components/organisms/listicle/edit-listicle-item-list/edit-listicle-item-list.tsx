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
      type: "REMOVE_LISTICLE_ITEM",
      id,
    });
  };

  const updateListicleItem = (id, url, category, status) => {
    const updatedListicleItem = { id, url, category, status };

    send({
      type: "UPDATE_LISTICLE_ITEM",
      data: updatedListicleItem,
    });

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
      {listicleItems.map((option, index) => (
        <ListicleItemInput
          id={option.id}
          key={option.id}
          url={option.url}
          category={option.category}
          status={option.status}
          removeListicleItem={removeListicleItem}
          updateListicleItem={updateListicleItem}
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
