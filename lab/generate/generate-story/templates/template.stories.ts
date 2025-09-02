import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import __COMPONENT_UPPERCASE_NAME__ from "../__COMPONENT_LOWERCASE_NAME__";

const meta: Meta<typeof __COMPONENT_UPPERCASE_NAME__> = {
  component: __COMPONENT_UPPERCASE_NAME__,
  title: "components/__ATOMIC_TYPE_NAME__/__COMPONENT_LOWERCASE_NAME__",
} satisfies Meta<typeof __COMPONENT_UPPERCASE_NAME__>;

export default meta;
type Story = StoryObj<typeof __COMPONENT_UPPERCASE_NAME__>;

export const __COMPONENT_UPPERCASE_NAME__Story: Story = {
  render: () => <__COMPONENT_UPPERCASE_NAME__ />,
};
