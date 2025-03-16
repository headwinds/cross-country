import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import AddQuestion from "../add-question";

const meta: Meta<typeof AddQuestion> = {
  component: AddQuestion,
  title: "components/organisms/survey/edit/add question",
} satisfies Meta<typeof AddQuestion>;

export default meta;
type Story = StoryObj<typeof AddQuestion>;

export const AddQuestionStory: Story = {
  render: () => <AddQuestion />,
};
