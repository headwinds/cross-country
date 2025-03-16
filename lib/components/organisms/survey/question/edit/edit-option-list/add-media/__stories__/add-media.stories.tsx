import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import AddMedia from "../add-media";

const meta: Meta<typeof AddMedia> = {
  component: AddMedia,
  title: "components/organisms/survey/edit/edit-option-list/add-media",
} satisfies Meta<typeof AddMedia>;

export default meta;
type Story = StoryObj<typeof AddMedia>;

export const AddMediaStory: Story = {
  render: () => <AddMedia />,
};
