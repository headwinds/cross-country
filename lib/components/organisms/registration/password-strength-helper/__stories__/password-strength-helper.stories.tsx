import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import PasswordStrengthHelper from "../password-strength-helper";

const meta: Meta<typeof PasswordStrengthHelper> = {
  component: PasswordStrengthHelper,
  title: "components/organisms/registration/password-strength-helper",
} satisfies Meta<typeof PasswordStrengthHelper>;

export default meta;
type Story = StoryObj<typeof PasswordStrengthHelper>;

export const PasswordStrengthHelperStory: Story = {
  render: () => <PasswordStrengthHelper />,
};

export const PasswordHelperInvalidStory = {
  render: () => (
    <PasswordStrengthHelper
      isPasswordFocussed={true}
      candidatePassword="hellowo"
    />
  ),
  name: "password helper invalid",
};

export const PasswordHelperValidStory = {
  render: () => (
    <PasswordStrengthHelper
      isPasswordFocussed={true}
      candidatePassword="Hello1world!"
    />
  ),
  name: "password helper valid",
};
