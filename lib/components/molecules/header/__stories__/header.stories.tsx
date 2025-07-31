import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Header from "../cc-header";

const meta: Meta<typeof Header> = {
  component: Header,
  title: "components/molecules/header",
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof Header>;

export const HeaderStory: Story = {
  render: () => <Header />,
};
