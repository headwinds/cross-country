import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Survey from "../survey";

const meta: Meta<typeof Survey> = {
  component: Survey,
  title: "components/organisms/survey",
} satisfies Meta<typeof Survey>;

export default meta;
type Story = StoryObj<typeof Survey>;

export const SurveyStory: Story = {
  render: () => {
    const [data, setData] = useState(null);

    const onSubmitForm = (data) => {
      console.log("Survey onSubmit data: ", data);
    };

    const onStateChange = (data) => {
      console.log("BuildFormStory onStateChange data.context: ", data.context);
      setData(data.context);
    };

    return (
      <Survey
        onStateChange={onStateChange}
        submitForm={onSubmitForm}
        data={data}
      />
    );
  },
};
