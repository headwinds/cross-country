import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Radio from "../radio";

const meta: Meta<typeof Radio> = {
  component: Radio,
  title: "components/atoms/radio",
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof Radio>;

export const RadioStory: Story = {
  render: () => {
    const [isSelected, setIsSelected] = useState(false);
    return (
      <Radio
        isSelected={isSelected}
        id="radio"
        onChange={() => setIsSelected(!isSelected)}
        tabIndex={0}
      />
    );
  },
};
