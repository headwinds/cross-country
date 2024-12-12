import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Carbon from "../carbon";

const meta: Meta<typeof Carbon> = {
  component: Carbon,
  title: "components/organisms/carbon",
} satisfies Meta<typeof Carbon>;

export default meta;
type Story = StoryObj<typeof Carbon>;

export const CarbonStory: Story = {
  render: () => <Carbon />,
};
