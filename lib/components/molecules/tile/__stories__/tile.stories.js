import Tile from "../tile";
import TileStory from "./tile-story";
import AnimatedTileStory from "./tile-animated-story";
import { Column, SubHeadline, Link } from "../../../";

export default {
  title: "design system/molecules/tile",
};

export const LandTile = {
  render: () => (
    <Column>
      <TileStory
        model={{
          id: 0,
          fill: "green",
        }}
      />
    </Column>
  ),

  name: "land tile",
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

export const AnimateTileColor = {
  render: () => <AnimatedTileStory />,
  name: "animate tile color",
};
