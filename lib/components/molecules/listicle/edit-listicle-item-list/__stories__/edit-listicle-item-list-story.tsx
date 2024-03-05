// TODO: explore why I disabled typecheck on this file!
// @ts-nocheck
// npm run build

import * as React from "react";
import { useState, useMemo } from "react";
import EditListicleItemList from "../edit-listicle-item-list";
//import { Form, Row, Paragraph, TextInput, RadioGroup } from "../../../../../";

const EditListicleItemListStory = () => {
  const data = { options: [], answer: "hello world" };
  const onChange = (event) => {
    console.log("EditOptionListStory changed event: ", event);
  };

  return <EditListicleItemList data={data} onChange={onChange} />;
};

export default EditListicleItemListStory;
