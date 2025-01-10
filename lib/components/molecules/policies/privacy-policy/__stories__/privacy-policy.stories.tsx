import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import PrivacyPolicy from "../privacy-policy";

const meta: Meta<typeof PrivacyPolicy> = {
  component: PrivacyPolicy,
  title: "components/molecules/privacy-policy",
} satisfies Meta<typeof PrivacyPolicy>;

export default meta;
type Story = StoryObj<typeof PrivacyPolicy>;

export const PrivacyPolicyStory: Story = {
  render: () => (
    <PrivacyPolicy
      companyName="Porthole"
      contactInfo="cabincraftapp@gmail.com"
    />
  ),
};
