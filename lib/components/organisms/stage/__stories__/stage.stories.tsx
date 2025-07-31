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
            backgroundColor: "#8B4513", // Coffee brown background
            position: "relative",
          },
        }}
      />
    </CrossCountryProvider>
  ),
};

export const DungeonTheme: Story = {
  render: () => (
    <CrossCountryProvider>
      <Stage
        actorModels={actors}
        stageConfig={{
          useImageTiles: false, // Use color-based themed tiles
          tileTheme: "dungeon",
          totalTiles: 9,
          customStyle: {
            display: "flex",
            width: 600,
            height: 300,
            backgroundColor: "#2F2F2F", // Dark dungeon background
            position: "relative",
          },
        }}
      />
    </CrossCountryProvider>
  ),
};

export const SpaceStationTheme: Story = {
  render: () => (
    <CrossCountryProvider>
      <Stage
        actorModels={actors.slice(0, 2)}
        stageConfig={{
          useImageTiles: false, // Use color-based themed tiles
          tileTheme: "spaceStation",
          totalTiles: 9,
          customStyle: {
            display: "flex",
            width: 600,
            height: 300,
            backgroundColor: "#000080", // Space blue background
            position: "relative",
          },
        }}
      />
    </CrossCountryProvider>
  ),
};

export const WesternTownTheme: Story = {
  render: () => (
    <CrossCountryProvider>
      <Stage
        actorModels={oneActorArr}
        stageConfig={{
          useImageTiles: false, // Use color-based themed tiles
          tileTheme: "westernTown",
          totalTiles: 9,
          customStyle: {
            display: "flex",
            width: 600,
            height: 300,
            backgroundColor: "#DEB887", // Burlywood background
            position: "relative",
          },
        }}
      />
    </CrossCountryProvider>
  ),
};

export const MixedColorTiles: Story = {
  render: () => (
    <CrossCountryProvider>
      <Stage
        actorModels={actors}
        stageConfig={{
          useImageTiles: false, // Use traditional color tiles
          totalTiles: 9,
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

// Example with just color tiles to verify tiles work
export const BasicColorTiles: Story = {
  render: () => (
    <CrossCountryProvider>
      <Stage
        actorModels={oneActorArr}
        stageConfig={{
          useImageTiles: false,
          totalTiles: 9,
          customStyle: {
            display: "flex",
            width: 600,
            height: 300,
            backgroundColor: "lightgray",
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

// Example showing custom actor positioning
export const CustomActorPositioning: Story = {
  render: () => {
    return (
      <CrossCountryProvider>
        <Stage
          actorModels={actors.slice(0, 3)}
          stageConfig={{
            useImageTiles: false, // Use color-based themed tiles
            tileTheme: "coffeeShop",
            totalTiles: 9,
            // Custom actor positioning - actors sit higher on tiles
            actorPositioning: {
              actorHeight: 80,
              bottomMargin: 30, // More space above tile bottom
            },
            customStyle: {
              display: "flex",
              width: 600,
              height: 300,
              backgroundColor: "#8B4513",
              position: "relative",
            },
          }}
        />
      </CrossCountryProvider>
    );
  },
};

// Example showing actors that extend above tiles (for tall actors)
export const TallActorPositioning: Story = {
  render: () => {
    return (
      <CrossCountryProvider>
        <Stage
          actorModels={actors.slice(0, 2)}
          stageConfig={{
            useImageTiles: false, // Use color-based themed tiles
            tileTheme: "spaceStation",
            totalTiles: 9,
            // Configuration for taller actors
            actorPositioning: {
              actorHeight: 120, // Taller actors
              bottomMargin: 15, // Less margin for dramatic effect
            },
            customStyle: {
              display: "flex",
              width: 600,
              height: 300,
              backgroundColor: "#000080",
              position: "relative",
            },
          }}
        />
      </CrossCountryProvider>
    );
  },
};
