import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import LabelInput, { LabelInputPair } from "./label-input";

const meta: Meta<typeof LabelInput> = {
  title: "Molecules/LabelInput",
  component: LabelInput,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LabelInput>;

const LabelInputWithState = (args: { pairs: LabelInputPair[]; isVertical?: boolean }) => {
  const [pairs, setPairs] = useState(args.pairs);
  return <LabelInput pairs={pairs} onChange={setPairs} isVertical={args.isVertical} />;
};

export const Horizontal: Story = {
  render: () => (
    <LabelInputWithState
      pairs={[
        { id: "1", label: "Name", value: "", placeholder: "Enter name" },
        { id: "2", label: "Email", value: "", placeholder: "Enter email", type: "email" },
      ]}
      isVertical={false}
    />
  ),
};

export const Vertical: Story = {
  render: () => (
    <LabelInputWithState
      pairs={[
        { id: "1", label: "Name", value: "", placeholder: "Enter name" },
        { id: "2", label: "Email", value: "", placeholder: "Enter email", type: "email" },
        { id: "3", label: "Bio", value: "", placeholder: "Tell us about yourself", inputType: "textarea" },
      ]}
      isVertical={true}
    />
  ),
};

export const VerticalWithMixedInputs: Story = {
  render: () => (
    <LabelInputWithState
      pairs={[
        { id: "1", label: "Username", value: "", placeholder: "Choose a username" },
        { id: "2", label: "Password", value: "", placeholder: "Enter password", type: "password" },
        { id: "3", label: "About", value: "", placeholder: "Tell us about yourself", inputType: "textarea" },
        { id: "4", label: "Website", value: "", placeholder: "https://example.com", type: "url" },
      ]}
      isVertical={true}
    />
  ),
};
