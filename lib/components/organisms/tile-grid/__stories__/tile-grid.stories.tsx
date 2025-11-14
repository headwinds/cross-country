import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useRef } from "react";
import TileGrid from "../tile-grid";
import IslandStory from "./island-tile-grid-story";
import { type TileModel } from "@headwinds/cross-country/models/TileModel";

const sandTileModel: TileModel = {
  label: "",
  description: "sand",
  material: "sand",
  movement_cost: 1,
  elevation: 0,
  color: "sandybrown",
  skin: "",
  damage: 0,
  age: -1, // doesn't age
  fill: "sandybrown",
  name: "",
  type: "default",
  is_obstacle: false,
  obstacle_remover: "none",
  id: "1",
};

const waterTileModel: TileModel = {
  label: "",
  description: "water",
  material: "water",
  movement_cost: 1,
  elevation: 0,
  color: "lightblue",
  skin: "",
  damage: 0,
  age: -1, // doesn't age
  fill: "lightblue",
  name: "",
  type: "default",
  is_obstacle: false,
  obstacle_remover: "none",
  id: "0",
};

const tarTileModel: TileModel = {
  label: "",
  description: "tar",
  material: "tar",
  movement_cost: 1,
  elevation: 0,
  color: "#333",
  skin: "",
  damage: 0,
  age: -1, // doesn't age
  fill: "#333",
  name: "",
  type: "default",
  is_obstacle: false,
  obstacle_remover: "none",
  id: "2",
};

const allTileModels = [sandTileModel, waterTileModel, tarTileModel];

const meta: Meta<typeof TileGrid> = {
  component: TileGrid,
  title: "components/organisms/tiles/tile grid",
} satisfies Meta<typeof TileGrid>;

export default meta;
type Story = StoryObj<typeof TileGrid>;

const tileGridIds = [
  ["0", "1", "0", "0", "0"],
  ["1", "0", "1", "2", "2"],
  ["0", "1", "0", "2", "2"],
  ["0", "0", "0", "0", "0"],
];

const getTileModelById = (id: string, tileModels: TileModel[]) => {
  const tileModel = tileModels.find((tile) => tile.id === id);
  return tileModel;
};

export const TileGridStory: Story = {
  args: {},
  render: () => {
    const totalCols = tileGridIds[0].length;
    const totalRows = tileGridIds.length;

    const totalTiles = totalCols * totalRows;

    const createDemoModels = () => {
      //const range = [...Array(64).keys()]; // chess!
      const range = [...Array(totalTiles).keys()];
      return range.map((index) => {
        const row = Math.floor(index / totalCols);
        const col = index % totalCols;

        const tileId = String(tileGridIds[row][col]);

        const tileModel = getTileModelById(tileId, allTileModels);
        return { id: String(index), ...tileModel };
      });
    };

    const demoModels = createDemoModels();
    const tileRefs = useRef([]);
    return (
      <TileGrid
        models={demoModels}
        totalInRow={totalRows}
        totalInCol={totalCols}
        tileRefs={tileRefs}
      />
    );
  },
};

export const IslandTileGridStory: Story = {
  args: {},
  render: () => {
    return <IslandStory />;
  },
};
