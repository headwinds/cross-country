import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Stage from "../stage";
import { actors } from "./actors-dataset";
import CrossCountryProvider from "@headwinds/cross-country/providers/cross-country-provider";

const meta: Meta<typeof Stage> = {
  component: Stage,
  title: "components/organisms/stage",
} satisfies Meta<typeof Stage>;

export default meta;
type Story = StoryObj<typeof Stage>;

export const SingleActorOnStage: Story = {
  render: () => (
    <CrossCountryProvider>
      <Stage
        actorModels={actors}
        config={{
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
        config={{
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
