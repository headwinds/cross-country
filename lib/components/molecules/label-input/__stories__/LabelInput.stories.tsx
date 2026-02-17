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


    return <LabelInput pairs={pairs} onChange={setPairs} />;
  },
};

export const WithTextArea: Story = {
  render: () => {
    const [pairs, setPairs] = React.useState<LabelInputPair[]>([
      {
        id: "title",
        label: "Title",
        value: "",
        placeholder: "Enter title",
      },
      {
        id: "description",
        label: "Description",
        value: "",
        placeholder: "Enter description",
        inputType: "textarea",
      },
      {
        id: "tags",
        label: "Tags",
        value: "",
        placeholder: "Enter tags",
      },
    ]);

    return <LabelInput pairs={pairs} onChange={setPairs} />;
  },
};
