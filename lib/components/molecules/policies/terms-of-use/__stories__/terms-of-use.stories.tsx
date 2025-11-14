import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import TermsOfUse from "../terms-of-use";

const meta: Meta<typeof TermsOfUse> = {
  component: TermsOfUse,
  title: "components/molecules/terms-of-use",
} satisfies Meta<typeof TermsOfUse>;

export default meta;
type Story = StoryObj<typeof TermsOfUse>;

export const TermsOUseStory: Story = {
  render: () => (
    <TermsOfUse companyName="Headwinds Studio" appName="Cross Country" />
  ),
};
