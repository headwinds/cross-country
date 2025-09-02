import type { Meta, StoryObj } from "@storybook/react-vite";
import Actor from "../actor";
import ActorBuilder from "../actor-builder";
import CrossCountryProvider from "@headwinds/cross-country/providers/cross-country-provider";
import giant from "./giant.png";

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

export const ActorCosplayStory: Story = {
  render: () => (
    <CrossCountryProvider>
      <div style={{ height: 300, width: 300 }}>
        <Actor
          position={{
            x: 100,
            y: 100,
            z: 0,
          }}
          config={null}
          customSkinStyle={{
            backgroundColor: "transparent",
            width: 300,
            height: 300,
          }}
        >
          <img src={giant} alt="giant" width={300} />
        </Actor>
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
