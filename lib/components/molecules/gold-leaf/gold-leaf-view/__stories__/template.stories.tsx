import type { Meta, StoryObj } from "@storybook/react";
import GoldLeafViewStory from "./gold-leaf-view-story";

const meta: Meta<typeof GoldLeafViewStory> = {
  component: GoldLeafViewStory,
  title: "components/molecules/gold leaf/gold leaf view",
} satisfies Meta<typeof GoldLeafViewStory>;

export default meta;
type Story = StoryObj<typeof GoldLeafViewStory>;

export const ArticleLeaf: Story = {
  args: {},
};

export const EmailLeaf: Story = {
  args: {},
};
