import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import EditOptionList from "../edit-option-list";

const meta: Meta<typeof EditOptionList> = {
  component: EditOptionList,
  title: "components/organisms/survey/edit option list",
} satisfies Meta<typeof EditOptionList>;

export default meta;
type Story = StoryObj<typeof EditOptionList>;

export const EditOptionListStory: Story = {
  render: () => {
    const data = { options: [] };
    const onChange = (event) => {
      console.log("EditOptionListStory changed event: ", event);
    };

    return <EditOptionList data={data} />;
  },
};
