import type { Meta, StoryObj } from "@storybook/react-vite";
import TileStory from "./tile-story";
import AnimatedTileStory from "./tile-animated-story";
import { Column } from "../../../";
import Tile from "../tile";
import type { TileModel } from "../../../../models/TileModel";

const waterTileModel: TileModel = {
  id: "0",
  fill: "lightblue",
  is_obstacle: false,
  obstacle_remover: "",
  elevation: 0,
  age: 0,
  name: "water",
  color: "lightblue",
  type: "tile",
};

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
  render: () => <TileStory model={waterTileModel} />,
};

export const SelectedWaterTile = {
  args: {
    model: {
      ...waterTileModel,
      fillBorder: "yellow",
      fillBackground: "blue",
      fillCorner: "cyan",
    },
  },
};

export const SquareWaterTile = {
  args: {
    model: {
      ...waterTileModel,
      fillBorder: "yellow",
      fillBackground: "blue",
      fillCorner: "cyan",
    },
    customStyle: {
      borderRadius: 0,
      margin: 0,
    },
  },
};

export const SquareGreenTile = {
  args: {
    model: {
      ...waterTileModel,
      fillBorder: "yellow",
      fillBackground: "blue",
      fillCorner: "cyan",
      fill: "green",
    },
    customStyle: {
      borderRadius: 0,
      margin: 0,
    },
  },
};

