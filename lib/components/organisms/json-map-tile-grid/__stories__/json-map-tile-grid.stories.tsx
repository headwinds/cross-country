import type { Meta, StoryObj } from "@storybook/react";
import React, { useRef } from "react";
import JsonMapTileGrid from "../json-map-tile-grid";
import Column from "../../../atoms/column/column";
import map from "./humber_map_data.json";

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

    // map is a json array with 16K tiles
    // and only want to use 2K for this story
    // map is a json array so we need to convert it to an array
    // Explicitly type map as an array
    const map2k = (map as any[]).slice(0, 200);

    const models = map2k.map((obj: Record<string, unknown>, index) => ({
      ...tile,
      ...(obj as Record<string, unknown>),
      id: index,
      x: index % 50, // Assuming a 50x40 grid
      y: Math.floor(index / 50),
      displayName: `Tile ${index}`,
    }));

    return (
      <Column customStyle={{ height: 400 }}>
        <JsonMapTileGrid models={models} />
      </Column>
    );
  },
};
