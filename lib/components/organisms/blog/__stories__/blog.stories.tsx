import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Blog from "../blog";
//import BlogStory from "./blog-story";

const meta: Meta<typeof Blog> = {
  component: Blog,
  title: "components/organisms/blog",
} satisfies Meta<typeof Blog>;

export default meta;
type Story = StoryObj<typeof Blog>;

export const BlogStory: Story = {
  render: () => <Blog />,
};
