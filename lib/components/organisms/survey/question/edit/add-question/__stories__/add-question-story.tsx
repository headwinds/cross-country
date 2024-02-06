import * as React from "react";
import { useState, useMemo } from "react";
import AddQuestion from "../";
import { Form, Row, Paragraph, TextInput, RadioGroup } from "../../../../../";

const defaultQuesiton = {
  id: null,
  name: `name-${new Date().getTime()}`,
  required: false,
  errorMessage: null,
  question: "what is the question?",
  options: [
    { id: 0, value: "yes" },
    { id: 1, value: "no" },
  ],
  answer: "yes",
};

const AddQuestionStory = () => {
  const [data, setData] = useState({ ...defaultQuesiton });

  const onChange = (question) => {};

  return <AddQuestion onChange={onChange} data={data} />;
};

export default AddQuestionStory;
