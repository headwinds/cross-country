import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import RemoveBackground from "../remove-background";

const meta: Meta<typeof RemoveBackground> = {
  component: RemoveBackground,
  title: "components/organisms/remove-background",
} satisfies Meta<typeof RemoveBackground>;

export default meta;
type Story = StoryObj<typeof RemoveBackground>;

export const RemoveBackgroundStory: Story = {
  render: () => <RemoveBackground />,
};
