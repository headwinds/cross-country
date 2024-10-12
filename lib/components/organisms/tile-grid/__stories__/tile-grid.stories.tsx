import type { Meta, StoryObj } from "@storybook/react";
import React, { useRef } from "react";
import TileGrid from "../tile-grid";
import Tile from "../../../molecules/tile";

const meta: Meta<typeof TileGrid> = {
  component: TileGrid,
  title: "components/organisms/tile grid",
} satisfies Meta<typeof TileGrid>;

export default meta;
type Story = StoryObj<typeof TileGrid>;

export const TileGridStory: Story = {
  args: {},
  render: () => {
    const createDemoModels = () => {
      //const range = [...Array(64).keys()]; // chess!
      const range = [...Array(12).keys()]; // not chess!
      return range.map((index) => {
        return { id: index };
      });
    };

    const demoModels = createDemoModels();
    const tileRefs = useRef([]);
    return (
      <TileGrid
        models={demoModels}
        totalInRow={3}
        Tile={Tile}
        tileRefs={tileRefs}
      />
    );
  },
};
