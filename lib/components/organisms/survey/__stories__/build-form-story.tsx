import * as React from "react";
import { useState } from "react";
import BuildForm from "../build-form";
import Quiz from "../quiz";
import { Button, Column, Headline, Paragraph } from "../../../";

/*
Goal: the atoms should be compatible with react-hook-form support its register function.
*/

const BuildFormStory = () => {
  const [data, setData] = useState({});
  const fields = [
    {
      name: "title",
      question: "Enter a title for your survey",
      placeholder: "Enter your title",
      required: true,
      questionType: "text",
      errorMessage: "A title is required",
      order: 1,
      userId: "1",
      section: "",
    },
  ];

  const submitForm = (data) => {
    console.log("ReactHookFormStory onFormSubmit", data);
  };

  const onStateChange = (data) => {
    console.log("BuildFormStory onStateChange data.context: ", data.context);
    setData(data.context);
  };

  return (
    <Column>
      <BuildForm
        fields={fields}
        submitForm={submitForm}
        onStateChange={onStateChange}
      />

      <Paragraph>As you build the form, you can preview it here...</Paragraph>
      <Quiz data={data} />
    </Column>
  );
};

export default BuildFormStory;
