import type { Meta, StoryObj } from "@storybook/react";
import Player from "../player";
import { Column } from "../../../";

const meta: Meta<typeof Player> = {
  component: Player,
  title: "components/organisms/player",
} satisfies Meta<typeof Player>;

export default meta;
type Story = StoryObj<typeof Player>;

export const PlayerStory: Story = {
  render: () => (
    <Column customStyle={{ width: 300, height: 150 }}>
      <Player
        artist={{
          artistName: "Brené Brown",
          websiteUrl: "https://brenebrown.com/",
          youtubeUrl: "https://www.youtube.com/watch?v=iCvmsMzlF7o",
        }}
      />
    </Column>
  ),
};
