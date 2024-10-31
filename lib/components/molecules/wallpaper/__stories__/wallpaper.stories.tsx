import type { Meta, StoryObj } from "@storybook/react";
import Wallpaper from "../wallpaper";

const meta: Meta<typeof Wallpaper> = {
  component: Wallpaper,
  title: "components/molecules/wallpaper",
} satisfies Meta<typeof Wallpaper>;

export default meta;
type Story = StoryObj<typeof Wallpaper>;

export const WallpaperStory: Story = {
  args: {},
};
