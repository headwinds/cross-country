import type { Meta, StoryObj } from "@storybook/react";
import RadioGroup from "../radio-group";

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
  title: "components/molecules/radio-group",
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const RadioGroupStory: Story = {
  render: () => (
    <RadioGroup
      data={{
        options: [
          { id: "1", value: "1" },
          { id: "2", value: "2" },
        ],
        question: "Select an option",
        answer: "1",
      }}
      onChange={(value) => console.log("Selected value:", value)}
    />
  ),
};
