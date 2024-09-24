import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "../checkbox";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: "components/atoms/checkbox",
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: () => {
    {
      const [isChecked, setChecked] = useState(false);

      const handleChange = () => {
        console.log("CheckboxStory handleChange");
        setChecked(!isChecked);
      };

      return (
        <Checkbox id={"0"} isChecked={isChecked} handleChange={handleChange} />
      );
    }
  },
};
