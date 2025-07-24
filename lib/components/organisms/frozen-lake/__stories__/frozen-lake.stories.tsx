import type { Meta, StoryObj } from "@storybook/react";
import FrozenLake from "../frozen-lake";

const meta: Meta<typeof FrozenLake> = {
  title: "components/organisms/FrozenLake",
  component: FrozenLake,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof FrozenLake>;

export const Default: Story = {
  args: {
    // Add your default props here
  },
};
