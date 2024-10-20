import type { Meta, StoryObj } from "@storybook/react";
import ArticleTemplate from "../";

const meta: Meta<typeof ArticleTemplate> = {
  component: ArticleTemplate,
  title: "components/templates/articles/article",
} satisfies Meta<typeof ArticleTemplate>;

export default meta;
type Story = StoryObj<typeof ArticleTemplate>;

export const ArticleStory: Story = {};
