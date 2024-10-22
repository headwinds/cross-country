import type { Meta, StoryObj } from "@storybook/react";
import Circle from "../circle";
import SVG from "@cross-country/components/atoms/svg";
import AnimatedCirclesStory from "./animated-circles-story";

const meta: Meta<typeof Circle> = {
  component: Circle,
  title: "components/atoms/svg/circle",
} satisfies Meta<typeof Circle>;

export default meta;
type Story = StoryObj<typeof Circle>;

export const CirclesStory: Story = {
  render: () => <AnimatedCirclesStory />,
};

export const CircleStory: Story = {
  render: () => (
    <SVG width={200} height={200}>
      <Circle cx={100} cy={100} r={50} fill="gold" />
    </SVG>
  ),
};
