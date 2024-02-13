import * as React from "react";
import { useState, useMemo } from "react";
import AddQuestion from "../";

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

  const onChange = (changeEvent) => {
    if (typeof changeEvent === "string") {
      return console.log("AddQuestionStory string changeEvent: ", changeEvent);
    }
    console.log("AddQuestionStory obj changeEvent: ", changeEvent);
  };

  return <AddQuestion data={data} />;
};

export default AddQuestionStory;
