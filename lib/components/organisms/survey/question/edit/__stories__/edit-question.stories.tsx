import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import EditQuestion from "../edit-question";
import { Paragraph } from "@/lib/components";

const meta: Meta<typeof EditQuestion> = {
  component: EditQuestion,
  title: "components/organisms/survey/edit question",
} satisfies Meta<typeof EditQuestion>;

const defaultQuesiton = {
  id: null,
  name: `name-${new Date().getTime()}`,
  required: false,
  errorMessage: null,
  question: "what is the question?",
  options: [],
  answer: "",
};

export default meta;
type Story = StoryObj<typeof EditQuestion>;

export const EditQuestionStory: Story = {
  render: () => {
    const question = "what is the question?";
    const questionType = "text";

    const [data, setData] = useState({
      ...defaultQuesiton,
      question,
      questionType,
    });

    const onSubmit = () => {
      console.log("QuestionStory submit");
    };

    const onChange = (question) => {
      console.log("EditQuestionStory question: ", question);
    };

    return (
      <>
        <Paragraph>Create & Edit the question</Paragraph>
        <EditQuestion onChange={onChange} data={data} />
      </>
    );
  },
};
