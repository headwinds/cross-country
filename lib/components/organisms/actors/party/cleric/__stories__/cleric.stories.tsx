import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Cleric from "../cleric";
import Stage from "../../../../stage";
import { ActorType } from "@/models/ActorModel";
import { ActorModel } from "@headwinds/cross-country/models/ActorModel";
import { ActorSpeechModel } from "../../../actor-speech/actor-speech";
import { GridConfig } from "@/utils/grid-position-util";

import cleric from "./cleric.png";

const meta: Meta<typeof Cleric> = {
  component: Cleric,
  title: "components/organisms/actors/party/cleric",
} satisfies Meta<typeof Cleric>;

export default meta;
type Story = StoryObj<typeof Cleric>;

export const ClericStory: Story = {
  render: () => {
    const stageConfig = {
      customStyle: {
        display: "flex",
        width: 600,
        height: 300,
        backgroundColor: "white",
        position: "relative",
      },
    };
    const clericActorModel: ActorModel = {
      id: 1,
      tileSize: 80,
      variant: "cleric",
      position: { x: 140, y: 140, z: 0 },
      gridPosition: { row: 1, col: 1 }, // Add grid position for speech positioning
      image: cleric,
      type: "humanoid", // Add type for proper rendering
    };
    const clericSpeech: ActorSpeechModel = {
      messageId: "1", // This should match currentGameState
      actorModel: clericActorModel,
      text: "I'm off foraging! Hopefully I'll be back with a big bag of truffles by dinner",
    };

    const tiles = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ];

    const totalInRows = tiles[0].length;
    const totalInCols = tiles.length;

    const gridConfig: GridConfig = {
      tileSize: 100,
      gapSize: 0,
      totalInRow: totalInRows,
      totalInCol: totalInCols,
      tiles: tiles,
    };

    return (
      <Stage
        actorModels={[clericActorModel]}
        actorSpeech={[clericSpeech]}
        stageConfig={stageConfig}
        gridConfig={gridConfig}
        currentGameState="1" // Add currentGameState to match speech messageId
      />
    );
  },
};
