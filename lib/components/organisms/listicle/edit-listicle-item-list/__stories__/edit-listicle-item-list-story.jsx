import * as React from "react";
import { useState, useMemo, useEffect } from "react";
import EditListicleItemList from "../edit-listicle-item-list";
import {
  Form,
  Row,
  Column,
  SubHeadline,
  Paragraph,
  TextInput,
  RadioGroup,
} from "../../../../../";
import { useMachine } from "@xstate/react";
import buildListicleMachine from "../../build-listicle-machine";

/*
{
  anon_user_account_id: "304cc1c5-e76f-4023-af36-479df7fe8b8f";
  category: "programming";
  created_at: "Thu, 29 Feb 2024 13:30:15 GMT";
  description: "";
  id: 1;
  title: "asdf";
  updated_at: null;
  url: "asdfasd";
  user_account_id: null;
}
*/

const editListicleItems = [
  {
    id: "1",
    url: "https://www.google.com",
    category: "search",
  },
  {
    id: "2",
    url: "https://www.yahoo.com",
    category: "search",
  },
  {
    id: "3",
    url: "https://www.bing.com",
    category: "search",
  },
  {
    id: "4",
    url: "https://www.duckduckgo.com",
    category: "search",
  },
  {
    id: "5",
    url: "https://www.ask.com",
    category: "search",
  },
];

const EditListicleItemListStory = ({ isEditStory = false }) => {
  const [state, send] = useMachine(buildListicleMachine);
  const data = { listicleItems: state.context.listicleItems };

  useEffect(() => {
    if (isEditStory) {
      // simulate load of listicle
      send({
        type: "UPDATE_LISTICLE_ITEMS",
        data: editListicleItems,
      });
    }
  }, []);

  // edit a list of items
  if (isEditStory) {
    console.log(
      "EditListicleItemListStory render state.context: ",
      state.context
    );

    return (
      <Column>
        <SubHeadline>Edit Listicle</SubHeadline>
        <EditListicleItemList data={data} send={send} />
      </Column>
    );
  }

  // there are no items to edit
  return (
    <Column>
      <SubHeadline>Create Listicle</SubHeadline>
      <EditListicleItemList data={data} send={send} />
    </Column>
  );
};

export default EditListicleItemListStory;
