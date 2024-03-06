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
    answer: string; // do I need this?!
    title: string;
  };
  onChange: any;
  isListicleItemListDisabled?: boolean;
};

const EditListicleItemList = ({
  data,
  onChange,
  isListicleItemListDisabled = false,
}: EditListicleItemListProps) => {
  const { listicleItems, answer } = data;
  console.log("EditListicleItemList data: ", data);
  /*
  const editListicleItemListMachine = useMemo(
    () =>
      createEditListicleItemListMachine({
        listicleItems: data?.listicleItems ?? [],
      }),
    [data]
  );*/

  const [state, send] = useMachine(editListicleItemListMachine);

  console.log("EditListicleItemList data state.context: ", state.context);

  const dataUpdate = useMemo(() => {
    console.log("EditListicleItemList dataUpdate: ", data?.listicleItems);
    // need a better way to update the listicle items after first render!
    setTimeout(() => {
      send({ type: "UPDATE_LISTICLE_ITEMS", data: data?.listicleItems ?? [] });
    }, 0);
    // 0 timeout does ensure it runs last
  }, [data]);

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
  // saved vs unsaved
  const updateListicleItem = (id, url, category) => {
    const updatedListicleItem = { id, url, category, status: "unsaved" };
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
          value={option.url}
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
