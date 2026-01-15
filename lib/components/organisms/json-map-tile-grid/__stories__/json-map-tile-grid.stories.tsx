import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useRef } from "react";
import JsonMapTileGrid from "../json-map-tile-grid";
import Column from "../../../atoms/column/column";
import humberMapData from "./humber_map_data.json";
import map from "./solo_scout_map_data.json"; // El Hierro map data
import type { ColorThemeType } from "../color-map.util";

type Tile = {
  x: number;
  y: number;
  color: string;
  height: number;
  width: number;
};

const meta: Meta<typeof JsonMapTileGrid> = {
  component: JsonMapTileGrid,
  title: "components/organisms/tiles/json map tile grid",
} satisfies Meta<typeof JsonMapTileGrid>;

export default meta;
type Story = StoryObj<typeof JsonMapTileGrid>;

export const ElHierroGridStory: Story = {
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
      type: "default",
      name: "",
      is_obstacle: false,
      obstacle_remover: "none",
    };

    const models = (map as Tile[]).map(
      (obj: Record<string, unknown>, index) => ({
        ...tile,
        ...obj,
        id: `id_${obj.x}_${obj.y}`,
        fill: String(obj.color),
      })
    );

    const simplifyColorsParams = {
      models: models,
      totalColors: 8,
      colorGeneratorType: "similar" as ColorThemeType,
    };

    return (
      <Column customStyle={{ height: 400 }}>
        <JsonMapTileGrid
          models={models}
          simplifyColorsParams={simplifyColorsParams}
        />
      </Column>
    );
  },
};

export const HumberGridStory: Story = {
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
      type: "default",
      name: "",
      is_obstacle: false,
      obstacle_remover: "none",
    };

    const models = (humberMapData as Tile[]).map(
      (obj: Record<string, unknown>, index) => ({
        ...tile,
        ...obj,
        id: `id_${obj.x}_${obj.y}`,
        fill: String(obj.color),
      })
    );

    const simplifyColorsParams = {
      models: models,
      totalColors: 4,
      colorGeneratorType: "similar" as ColorThemeType,
    };

    return (
      <Column customStyle={{ height: 400 }}>
        <JsonMapTileGrid
          models={models}
          simplifyColorsParams={simplifyColorsParams}
        />
      </Column>
    );
  },
};
