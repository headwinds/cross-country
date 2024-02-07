import * as React from "react";
import { useState } from "react";
import BuildForm from "../build-form";
import { Button, Column, Headline, Paragraph } from "../../../";

/*
Goal: the atoms should be compatible with react-hook-form support its register function.
*/

const BuildFormStory = () => {
  const [data, setData] = useState({});
  /*
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
  ];*/

  const submitForm = (data) => {
    console.log("ReactHookFormStory onFormSubmit", data);
  };

  const onStateChange = (data) => {
    console.log("BuildFormStory onStateChange data.context: ", data.context);
    setData(data.context);
  };

  const headlineText = "Build your Survey";

  return (
    <Column>
      <BuildForm
        submitForm={submitForm}
        onStateChange={onStateChange}
        headlineText={headlineText}
      />
      <Paragraph>As you build the form, you can preview it here...</Paragraph>
      <Paragraph>Saved: needs local storage backup</Paragraph>
    </Column>
  );
};

export default BuildFormStory;
