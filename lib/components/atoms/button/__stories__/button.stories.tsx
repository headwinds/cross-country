import type { Meta, StoryObj } from "@storybook/react";
import Button from "../button-themed";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "design system/atoms/button",
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    primary: true,
    children: "Click me",
  },
};
