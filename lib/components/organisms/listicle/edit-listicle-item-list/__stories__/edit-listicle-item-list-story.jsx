// TODO: explore why I disabled typecheck on this file!
// @ts-nocheck
// npm run build

import * as React from "react";
import { useState, useMemo } from "react";
import EditListicleItemList from "../edit-listicle-item-list";
//import { Form, Row, Paragraph, TextInput, RadioGroup } from "../../../../../";

const editListicleItems = [
  {
    id: "1",
    url: "https://www.google.com",
    category: "search",
    status: "draft",
  },
  {
    id: "2",
    url: "https://www.yahoo.com",
    category: "search",
    status: "draft",
  },
  {
    id: "3",
    url: "https://www.bing.com",
    category: "search",
    status: "draft",
  },
  {
    id: "4",
    url: "https://www.duckduckgo.com",
    category: "search",
    status: "draft",
  },
  {
    id: "5",
    url: "https://www.ask.com",
    category: "search",
    status: "draft",
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

    return <EditListicleItemList data={data} onChange={onChange} />;
  }

  // there are no items to edit
  return (
    <EditListicleItemList
      data={{ listicleItems: null, answer: null }}
      onChange={onChange}
    />
  );
};

export default EditListicleItemListStory;
