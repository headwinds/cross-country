import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import RadioGroup from "../radio-group";

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
  title: "components/molecules/radio-group",
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const RadioGroupStory: Story = {
  render: () => {
    const [selectedId, setSelectedId] = useState("1");
    return (
      <RadioGroup
        data={{
          options: [
            { id: "1", value: "Option 1" },
            { id: "2", value: "Option 2" },
            { id: "3", value: "Option 3" },
          ],
          question: "Select an option",
          answer: "1",
        }}
        selectedId={selectedId}
        onChange={(value) => {
          console.log("Selected value:", value);
          setSelectedId(value);
        }}
      />
    );
  },
};
