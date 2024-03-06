// TODO: explore why I disabled typecheck on this file!
// @ts-nocheck
// npm run build

import * as React from "react";
import { useState, useMemo } from "react";
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
  const defaultData = isEditStory ? editListicleItems : [];
  const [data, setData] = useState(defaultData);

  const onChange = (data) => {
    console.log("EditListicleItemListStory changed data: ", data);
  };

  // edit a list of items
  if (isEditStory) {
    const data = { listicleItems: editListicleItems, answer: null };

    return (
      <Column>
        <SubHeadline>Edit Listicle</SubHeadline>
        <EditListicleItemList data={data} onChange={onChange} />
      </Column>
    );
  }

  // there are no items to edit
  return (
    <Column>
      <SubHeadline>Create Listicle</SubHeadline>
      <EditListicleItemList
        data={{ listicleItems: [], answer: null }}
        onChange={onChange}
      />
    </Column>
  );
};

export default EditListicleItemListStory;
