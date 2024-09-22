import type { Meta, StoryObj } from "@storybook/react";
import Circle from "../circle";
import AnimatedCirclesStory from "./animated-circles-story";

const meta: Meta<typeof Circle> = {
  component: Circle,
  title: "components/atoms/svg/circle",
} satisfies Meta<typeof Circle>;

export default meta;
type Story = StoryObj<typeof Circle>;

export const Circles: Story = {
  render: () => <AnimatedCirclesStory />,
};
