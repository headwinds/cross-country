import * as React from "react";
import { useState } from "react";
import BuildForm from "../build-form";
import { Button, Wrapper, Headline, Paragraph, Wallpaper } from "../../../";
import FinalForm from "../final-form";

/*
Goal: the atoms should be compatible with react-hook-form support its register function.
*/

const BuildFormStory = () => {
  const [data, setData] = useState(null);
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
    console.log("Save built form", data);
  };

  const onStateChange = (data) => {
    console.log("BuildFormStory onStateChange data.context: ", data.context);
    setData(data.context);
  };

  const headlineText = "Build your Survey";

  const title = data?.questions?.length > 0 ? data.questions[0].answer : "";
  console.log("Build form story data: ", data);

  return (
    <Wrapper backgroundColor="whitesmoke">
      <BuildForm
        submitForm={submitForm}
        onStateChange={onStateChange}
        headlineText={headlineText}
      />
      <Paragraph>As you build the form, you can preview it here...</Paragraph>
      <FinalForm data={data} />
      <Paragraph>Saved: needs local storage backup</Paragraph>
    </Wrapper>
  );
};

export default BuildFormStory;
