// TODO: explore why I disabled typecheck on this file!
// @ts-nocheck
// npm run build

import * as React from "react";
import { useState, useMemo } from "react";
import EditOptionList from "../edit-option-list";
import { Form, Row, Paragraph, TextInput, RadioGroup } from "../../../../../";

const EditOptionListStory = () => {
  const data = { options: [] };
  const onChange = (event) => {
    console.log("EditOptionListStory changed event: ", event);
  };

  return <EditOptionList data={data} />;
};

export default EditOptionListStory;
