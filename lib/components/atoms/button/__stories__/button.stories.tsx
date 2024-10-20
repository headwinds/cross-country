import type { Meta, StoryObj } from "@storybook/react";
import Button from "../button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "components/atoms/button",
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonStory: Story = {
  args: {
    text: "click me",
  },
};
