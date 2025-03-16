import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import AnswerInput from "../answer-input";

const meta: Meta<typeof AnswerInput> = {
  component: AnswerInput,
  title: "components/organisms/survey/edit/answer input",
} satisfies Meta<typeof AnswerInput>;

export default meta;
type Story = StoryObj<typeof AnswerInput>;

export const AnswerInputStory: Story = {
  render: () => (
    <AnswerInput
      //hasActions={false}
      //helperText={""}
      data={{
        question: "Who lead the creation of Rez?",
        answer: "Tetsuya Mizuguchi",
        isRequired: false,
      }}
    />
  ),
};

/*
import {
  Column,
  SubHeadline,
  TextInput,
  Button,
  Row,
  Label,
  Paragraph,
  TextAnswerInput,
  AnswerInput,
  TextAreaAnswerInput,
} from "../../../../../";

export default {
  title: "components/organisms/survey/question",
};

export const TextInput = {
  render: () => (
    <TextAnswerInput
      hasActions={false}
      helperText={""}
      data={{
        question: "Who lead the creation of Rez?",
        answer: "Tetsuya Mizuguchi",
        isRequired: false,
      }}
    />
  ),

  name: "text input",
};

export const TextArea = {
  render: () => (
    <TextAreaAnswerInput
      rows={10}
      hasActions={false}
      helperText={""}
      data={{
        question: "What makes Rez so special?",
        answer: "Tetsuya Mizuguchi",
        isRequired: false,
      }}
    />
  ),

  name: "text area",
};

export const TextInputMultiRow = {
  render: () => (
    <AnswerInput
      rows={10}
      hasActions={false}
      helperText={""}
      data={{
        question: "What makes Rez so special?",
        answer: "Tetsuya Mizuguchi",
        isRequired: false,
      }}
    />
  ),

  name: "text input multi row",
};

*/
