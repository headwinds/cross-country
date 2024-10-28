import type { Meta, StoryObj } from "@storybook/react";
import Actor from "../actor";

const meta: Meta<typeof Actor> = {
  component: Actor,
  title: "components/organisms/actor",
} satisfies Meta<typeof Actor>;

export default meta;
type Story = StoryObj<typeof Actor>;

export const ActorStory: Story = {
  args: {
    message: "hello world",
  },
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
