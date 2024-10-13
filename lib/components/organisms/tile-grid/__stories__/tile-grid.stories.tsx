import type { Meta, StoryObj } from "@storybook/react";
import React, { useRef } from "react";
import TileGrid from "../tile-grid";

const meta: Meta<typeof TileGrid> = {
  component: TileGrid,
  title: "components/organisms/tile grid",
} satisfies Meta<typeof TileGrid>;

export default meta;
type Story = StoryObj<typeof TileGrid>;

export const TileGridStory: Story = {
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
      age: -1, // doesn't age
      fill: "lightblue",
    };
    const createDemoModels = () => {
      //const range = [...Array(64).keys()]; // chess!
      const range = [...Array(12).keys()];
      return range.map((index) => {
        return { id: index, ...tile };
      });
    };

    const demoModels = createDemoModels();
    const tileRefs = useRef([]);
    return <TileGrid models={demoModels} totalInRow={3} tileRefs={tileRefs} />;
  },
};
