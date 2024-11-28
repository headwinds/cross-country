import type { Meta, StoryObj } from "@storybook/react";
import Branches from "../branches";

const meta: Meta<typeof Branches> = {
  component: Branches,
  title: "components/organisms/branches",
} satisfies Meta<typeof Branches>;

export default meta;
type Story = StoryObj<typeof Branches>;

export const BranchesStory: Story = {
  render: () => {
    const onLoadedCallback = (error) => {
      console.log;
    };
    return <Branches isTesting onLoadedCallback={onLoadedCallback} />;
  },
};
