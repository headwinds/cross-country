import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Blog from "../blog";

const meta: Meta<typeof Blog> = {
  component: Blog,
  title: "components/pages/blog",
} satisfies Meta<typeof Blog>;

export default meta;
type Story = StoryObj<typeof Blog>;

export const BlogStory: Story = {
  render: () => <Blog />,
};
