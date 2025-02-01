import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import TextArea from "../text-area";

const meta: Meta<typeof TextArea> = {
  component: TextArea,
  title: "components/atoms/text-area",
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof TextArea>;

export const TextAreaStory: Story = {
  render: () => {
    const [value, setValue] = React.useState("");
    const onTextChange = (text: string) => {
      console.log("TextArea onTextChange text: ", text);
      setValue(text);
    };
    const userPrompt = "What's on your mind?";
    return (
      <TextArea
        value={value}
        onTextChange={onTextChange}
        placeholder={userPrompt}
      />
    );
  },
};
