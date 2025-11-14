import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Stage from "../stage";
import { actors } from "./actors-dataset";
import CrossCountryProvider from "@headwinds/cross-country/providers/cross-country-provider";

const meta: Meta<typeof Stage> = {
  component: Stage,
  title: "components/organisms/stage",
} satisfies Meta<typeof Stage>;

export default meta;
type Story = StoryObj<typeof Stage>;

const oneActorArr = actors.slice(0, 1);

export const SingleActorOnStage: Story = {
  render: () => (
    <CrossCountryProvider>
      <Stage
        actorModels={oneActorArr}
        actorSpeech={[]}
        stageConfig={{
          customStyle: {
            display: "flex",
            width: 600,
            height: 300,
            backgroundColor: "white",
            position: "relative",
          },
        }}
      />
    </CrossCountryProvider>
  ),
};

export const MultipleActorsOnStage: Story = {
  render: () => (
    <CrossCountryProvider>
      <Stage
        actorModels={actors}
        stageConfig={{
          customStyle: {
            display: "flex",
            width: 600,
            height: 300,
            backgroundColor: "white",
            position: "relative",
          },
        }}
      />
    </CrossCountryProvider>
  ),
};

// New modding examples with themed color tiles
export const CoffeeShopTheme: Story = {
  render: () => (
    <CrossCountryProvider>
      <Stage
        actorModels={oneActorArr}
        stageConfig={{
          useImageTiles: false, // Use color-based themed tiles
          tileTheme: "coffeeShop",
          totalTiles: 9,
          customStyle: {
            display: "flex",
            width: 600,
            height: 300,
            backgroundColor: "white", // Coffee brown background
            position: "relative",
          },
        }}
      />
    </CrossCountryProvider>
  ),
};

// Example showing game state management
export const GameStateExample: Story = {
  render: () => {
    const gameScript = [
      {
        messageId: "intro",
        values: { ts: Date.now() },
        actorModel: oneActorArr[0],
        name: "hunter",
        text: "Welcome to the adventure! Let's begin our quest.",
      },
      {
        messageId: "mid_game",
        values: { ts: Date.now() },
        actorModel: oneActorArr[0],
        name: "hunter",
        text: "We've made progress. The path ahead looks dangerous.",
      },
      {
        messageId: "end_game",
        values: { ts: Date.now() },
        actorModel: oneActorArr[0],
        name: "hunter",
        text: "Victory is ours! The quest is complete.",
      },
    ];

    return (
      <CrossCountryProvider>
        <Stage
          actorModels={oneActorArr}
          actorSpeech={gameScript}
          currentGameState="mid_game" // This would come from saved game state
          stageConfig={{
            useImageTiles: false, // Use color-based themed tiles
            tileTheme: "dungeon",
            totalTiles: 9,
            customStyle: {
              display: "flex",
              width: 600,
              height: 300,
              backgroundColor: "#2F2F2F",
              position: "relative",
            },
          }}
        />
      </CrossCountryProvider>
    );
  },
};
