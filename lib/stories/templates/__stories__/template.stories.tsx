import type { Meta, StoryObj } from "@storybook/react";
import GoldLeafStory from "./gold-leaf-view-story";

const meta: Meta<typeof GoldLeafStory> = {
  component: GoldLeafStory,
  title: "storybook/templates",
} satisfies Meta<typeof GoldLeafStory>;

export default meta;
type Story = StoryObj<typeof GoldLeafStory>;

export const TemplateStory: Story = {
  args: {
    message: "hello there",
  },
};
