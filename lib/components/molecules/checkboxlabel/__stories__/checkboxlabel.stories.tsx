import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import CheckboxLabel from "../checkboxlabel";

const meta: Meta<typeof CheckboxLabel> = {
  component: CheckboxLabel,
  title: "components/molecules/checkboxlabel",
} satisfies Meta<typeof CheckboxLabel>;

export default meta;
type Story = StoryObj<typeof CheckboxLabel>;

export const CheckboxlabelStory: Story = {
  render: () => {
    const [isChecked, setIsChecked] = React.useState(false);
    const handleChange = () => {
      setIsChecked(!isChecked);
    };
    return (
      <CheckboxLabel
        config={{
          text: "Sample Checkbox",
          id: "sample-checkbox",
          isChecked,
          handleChange,
        }}
      />
    );
  },
};
