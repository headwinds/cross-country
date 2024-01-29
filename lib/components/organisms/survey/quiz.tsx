"use client";
import React, { useEffect } from "react";
import Question from "./question";
import { Column, Headline, SubHeadline, Paragraph } from "../../";

const URL = "https://www.letsrevolutionizetesting.com/challenge.json";

const defaultData = {
  title: "No title",
  description: "",
};

const defaultCustomClasses = {
  headline: "text-3xl",
  paragraph: "m-2",
};

const Quiz = ({ data = defaultData, customClasses = defaultCustomClasses }) => {
  const { title, description } = data;

  console.log("Quiz data: ", data);

  return (
    <Column>
      <Headline customClass={customClasses.headline}>{title}</Headline>
      <Paragraph customClass={customClasses.paragraph}>{description}</Paragraph>
    </Column>
  );
};

export default Quiz;

/*
Phase 2

I want to disable to support descriptions  with markup in the quiz component. 


<Paragraph customClass="m-2">
        The climate change is a global concern, and you may know that Carbon
        contributes to this crisis. But how much to know about it?
      </Paragraph>
      <Paragraph customClass="m-2">
        In this quiz, you will be asked 100 questions to test your knowledge of
        Carbon, and hopefully learn more about by the time you finish.
      </Paragraph>
      <Paragraph customClass="m-2">
        In fact, you can nothing about Carbon to begin this test as it is
        intended to be a learning experience.
      </Paragraph>
      <Paragraph customClass="m-2">
        This quiz is completely anonymous but your responses will be collected
        assigned to a unique ID. You can take this quiz as many times as you
        like. Please refrain sharing your unique ID with anyone else if you
        would like to keep your responses private.
      </Paragraph>
*/
