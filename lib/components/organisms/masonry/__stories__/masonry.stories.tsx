import type { Meta, StoryObj } from "@storybook/react";
import Masonry from "../masonry";
import { defaultActors } from "../masonry";

const meta: Meta<typeof Masonry> = {
  component: Masonry,
  title: "components/organisms/masonry",
} satisfies Meta<typeof Masonry>;

export default meta;
type Story = StoryObj<typeof Masonry>;

export const MasonryStory: Story = {
  args: {
    actors: defaultActors,
  },
};
