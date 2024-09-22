import type { Meta, StoryObj } from "@storybook/react";
import Tree from "../tree";
import TreeStory from "./tree-story";

const meta: Meta<typeof Tree> = {
  component: Tree,
  title: "components/molecules/tree",
} satisfies Meta<typeof Tree>;

export default meta;
type Story = StoryObj<typeof Tree>;

export const Recursion: Story = {
  render: () => {
    return <TreeStory strategy="recursive" />;
  },
};
