import type { Meta, StoryObj } from "@storybook/react";
import TileStory from "./tile-story";
import AnimatedTileStory from "./tile-animated-story";
import { Column } from "../../../";
import Tile from "../tile";

interface TileProps {
  message: string;
}
const Template = ({ message }: TileProps) => <p>{message}</p>;

const meta: Meta<typeof Tile> = {
  component: Tile,
  title: "components/molecules/tile",
} satisfies Meta<typeof Tile>;

export default meta;
type Story = StoryObj<typeof Template>;

export const ConcreteTileStory: Story = {
  args: {
    message: "hello world",
  },
};

export const WaterTile = {
  render: () => (
    <Column>
      <TileStory
        model={{
          id: 0,
          fill: "lightblue",
        }}
      />
    </Column>
  ),

  name: "water tile",
};

/*
export const AnimateTileColor = {
  render: () => <AnimatedTileStory />,
  name: "animate tile color",
};
*/
