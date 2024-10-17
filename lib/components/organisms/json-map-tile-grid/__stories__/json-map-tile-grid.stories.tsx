import type { Meta, StoryObj } from "@storybook/react";
import React, { useRef } from "react";
import JsonMapTileGrid from "../json-map-tile-grid";
import Column from "../../../atoms/column/column";
//import map from "./humber_map_data.json";
import map from "./solo_scout_map_data.json";

type Tile = {
  x: number;
  y: number;
  color: string;
  height: number;
  width: number;
};

const meta: Meta<typeof JsonMapTileGrid> = {
  component: JsonMapTileGrid,
  title: "components/organisms/json map tile grid",
} satisfies Meta<typeof JsonMapTileGrid>;

export default meta;
type Story = StoryObj<typeof JsonMapTileGrid>;

export const SimTileGridStory: Story = {
  args: {},
  render: () => {
    const tile = {
      label: "",
      description: "",
      material: "",
      movement_cost: 0,
      elevation: 0,
      color: "#000",
      skin: "",
      damage: 0,
      age: -1,
      fill: "lightblue",
      x: 0,
      y: 0,
      width: 1,
      height: 1,
      displayName: "",
    };

    const models = (map as Tile[]).map(
      (obj: Record<string, unknown>, index) => ({
        ...tile,
        ...obj,
        id: `id_${obj.x}_${obj.y}`,
        fill: obj.color,
      })
    );

    return (
      <Column customStyle={{ height: 400 }}>
        <JsonMapTileGrid models={models} />
      </Column>
    );
  },
};
