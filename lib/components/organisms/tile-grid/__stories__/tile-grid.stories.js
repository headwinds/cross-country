import TileGrid from "../tile-grid";
import TileGridStory from "./tile-grid-story";
import IslandTileGridStory from "./island-tile-grid-story";

export default {
  title: "design system/organisms/tilegrid",
};

export const IslandTileGrid = {
  render: () => <IslandTileGridStory />,
  name: "island tile grid",
};

export const TileGrid = {
  render: () => <TileGrid />,
  name: "tile grid",
};

export const CustomTileGrid = {
  render: () => <TileGridStory />,
  name: "custom tile grid",
};
