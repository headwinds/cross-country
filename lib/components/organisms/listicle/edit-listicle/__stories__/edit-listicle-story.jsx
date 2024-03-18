import * as React from "react";
import { useState, useMemo } from "react";
import EditListicle from "../edit-listicle";
//import { Form, Row, Paragraph, TextInput, RadioGroup } from "../../../../../";

const EditListicleStory = () => {
  const data = { options: [], answer: "hello world" };
  const onChange = (event) => {
    console.log("EditOptionListStory changed event: ", event);
  };

  return <EditListicle data={data} onChange={onChange} />;
};

export default EditListicleStory;
