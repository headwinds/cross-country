import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Registration, { RegistrationEvent } from "../registration";

const meta: Meta<typeof Registration> = {
  component: Registration,
  title: "components/organisms/registration",
} satisfies Meta<typeof Registration>;

export default meta;
type Story = StoryObj<typeof Registration>;

export const RegistrationStory: Story = {
  render: () => {
    const onChange = (event: RegistrationEvent) => {
      console.log("RegistrationStory onChange event", event);
    };

    const onLoginClick = () => {
      // redirect to login page or launch a modal whatever
      console.log("onLoginClick");
    };

    const socialUser = {
      platform: "google",
      email: "support@soloscout.net",
    };

    return (
      <Registration
        text="Sign Up"
        socialUser={socialUser}
        onChange={onChange}
        onLoginClick={onLoginClick}
        message="We only require that you create a unique username."
        hasHorizontalLine={false}
      />
    );
  },
};

export const RegistrationWithoutSocialStory: Story = {
  render: () => {
    const onChange = (event: RegistrationEvent) => {
      console.log("RegistrationStory onChange event", event);
    };

    return <Registration onChange={onChange} />;
  },
};
