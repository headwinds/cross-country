import React, { useState, useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import TakeAnswerInput from "../take-answer-input";

const meta: Meta<typeof TakeAnswerInput> = {
  component: TakeAnswerInput,
  title: "components/organisms/survey/take/take answer input",
} satisfies Meta<typeof TakeAnswerInput>;

export default meta;
type Story = StoryObj<typeof TakeAnswerInput>;

// phase 2
/*
const DefaultHtmlQuesiton = () => (
  <Paragraph>
    What god did{" "}
    <Link url="https://vikings.fandom.com/wiki/Ragnar">Ragnar Lothbrok</Link>{" "}
    claim to be his father?
  </Paragraph>
);
*/

/*
input
multiple choice
date time
*/

export const TakeAnswerInputStory: Story = {
  render: () => {
    const data = {
      question: "What god did Ragnar Lothbrok claim to be his father?",
      answer: "Odin",
    };

    const onChange = (selectedId: string) => {};

    return <TakeAnswerInput data={data} onChange={onChange} />;
  },
};

export const TakeAnswerMultipleChoiceStory: Story = {
  render: () => {
    const [selectedId, setSelectedId] = useState(null);

    const list = [
      { id: "1", value: "Thor" },
      { id: "2", value: "Odin" },
      { id: "3", value: "Floki" },
      { id: "4", value: "Heimdall" },
      { id: "5", value: "Njord" },
    ];

    const data = {
      options: list,
      question: "What god did Ragnar Lothbrok claim to be his father?",
      answer: "Odin",
    };

    useEffect(() => {
      setSelectedId(list[0].id);
    }, []);

    const onChange = (selectedId: string) => {
      setSelectedId(selectedId);
    };

    return (
      <TakeAnswerInput
        data={data}
        onChange={onChange}
        selectedId={selectedId}
        variant="multiple-choice"
      />
    );
  },
};
