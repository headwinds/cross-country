import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import ActorSpeech from "../actor-speech";
import { ActorSpeechModel } from "../../../actors/actor-speech/actor-speech";
import { defaultActorModel } from "../../../stage/stage";
import CrossCountryProvider from "@headwinds/cross-country/providers/cross-country-provider";

const meta: Meta<typeof ActorSpeech> = {
  component: ActorSpeech,
  title: "components/organisms/actor-speech",
} satisfies Meta<typeof ActorSpeech>;

export default meta;
type Story = StoryObj<typeof ActorSpeech>;

const defaultActorSpeech = [
  {
    messageId: "today",
    values: { ts: Date.now() },
    actorModel: defaultActorModel,
    name: "hunter",
    text: "Today is a good day to hunt.",
  },
] as ActorSpeechModel[];

export const ActorSpeechStory: Story = {
  render: () => (
    <CrossCountryProvider>
      <ActorSpeech speech={defaultActorSpeech[0]} />
    </CrossCountryProvider>
  ),
};
