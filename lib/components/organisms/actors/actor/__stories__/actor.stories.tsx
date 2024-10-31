import type { Meta, StoryObj } from "@storybook/react";
import Actor from "../actor";
import ActorBuilder from "../actor-builder";

const meta: Meta<typeof Actor> = {
  component: Actor,
  title: "components/organisms/actor",
} satisfies Meta<typeof Actor>;

export default meta;
type Story = StoryObj<typeof Actor>;

export const ActorStory: Story = {
  render: () => (
    <div style={{ height: 300 }}>
      <Actor
        position={{
          x: 0,
          y: 0,
          z: 0,
        }}
        customSkinStyle={{
          backgroundColor: "grey",
        }}
      />
    </div>
  ),
};

export const ActorBuilderStory: Story = {
  render: () => (
    <div style={{ height: 300 }}>
      <ActorBuilder />
    </div>
  ),
};
