import type { Meta, StoryObj } from "@storybook/react-vite";
import Actor from "../actor";
import ActorBuilder from "../actor-builder";
import CrossCountryProvider from "@headwinds/cross-country/providers/cross-country-provider";

const meta: Meta<typeof Actor> = {
  component: Actor,
  title: "components/organisms/actor",
  parameters: {
    //layout: "left",
  },
} satisfies Meta<typeof Actor>;

export default meta;
type Story = StoryObj<typeof Actor>;

export const ActorStory: Story = {
  render: () => (
    <CrossCountryProvider>
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
    </CrossCountryProvider>
  ),
};

export const ActorBuilderStory: Story = {
  render: () => (
    <div style={{ height: 300 }}>
      <CrossCountryProvider>
        <ActorBuilder />
      </CrossCountryProvider>
    </div>
  ),
};
