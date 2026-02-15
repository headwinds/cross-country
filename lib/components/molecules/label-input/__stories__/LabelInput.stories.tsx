import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import LabelInput from "../label-input";
import type { LabelInputPair } from "../label-input";

const meta: Meta<typeof LabelInput> = {
  component: LabelInput,
  title: "components/molecules/label-input",
} satisfies Meta<typeof LabelInput>;

export default meta;
type Story = StoryObj<typeof LabelInput>;

export const SinglePair: Story = {
  render: () => {
    const [pairs, setPairs] = React.useState<LabelInputPair[]>([
      { id: "name", label: "Name", value: "", placeholder: "Enter your name" },
    ]);

    const handleTextChange = (id: string, value: string) => {
      setPairs((prev) =>
        prev.map((pair) => (pair.id === id ? { ...pair, value } : pair))
      );
    };

    return <LabelInput pairs={pairs} onChange={setPairs} />;
  },
};

export const MultiplePairs: Story = {
  render: () => {
    const [pairs, setPairs] = React.useState<LabelInputPair[]>([
      {
        id: "first-name",
        label: "First Name",
        value: "",
        placeholder: "Enter first name",  
      },
      {
        id: "last-name",
        label: "Last Name",
        value: "",
        placeholder: "Enter last name",
      },
      {
        id: "email",
        label: "Email",
        value: "",
        placeholder: "Enter email",
        type: "email",
      },
    ]);

    const handleTextChange = (id: string, value: string) => {
      setPairs((prev) =>
        prev.map((pair) => (pair.id === id ? { ...pair, value } : pair))
      );
    };

    return <LabelInput pairs={pairs} onChange={setPairs} />;
  },
};
