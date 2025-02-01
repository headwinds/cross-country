import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Input from "../text-input";
import TextInputStory from "./text-input-story";
import TextInputDefaultValueStory from "./text-input-default-value-story";
import StateMachineTextInputStory from "./state-machine-text-input-story";
import StateMachineContentEditableStory from "./state-machine-content-editable-story";

const meta: Meta<typeof Input> = {
  component: Input,
  title: "components/atoms/input",
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const InputStory: Story = {
  render: () => {
    const onTextChange = (text: string) => {
      console.log("Inut onTextChange text: ", text);
    };

    return <Input onTextChange={onTextChange} />;
  },
};

export const Standard = {
  render: () => <TextInputStory />,
  name: "standard",
};

export const StandardWithDefaultValue = {
  render: () => <TextInputDefaultValueStory />,
  name: "standard with default value",
};

export const StateMachineInput = {
  render: () => <StateMachineTextInputStory />,
  name: "state machine input",
};

export const StateMachineContenteditable = {
  render: () => <StateMachineContentEditableStory />,
  name: "state machine contenteditable",
};
