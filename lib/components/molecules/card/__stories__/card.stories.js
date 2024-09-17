import type { Meta, StoryObj } from "@storybook/react";
import PhotoCardStory from "./photo-card-story";
import AmazonCardStory from "./amazon-card-story";
import CardBuilderStory from "./card-builder-story";
import Card from "../card";

const meta: Meta<typeof Card> = {
  component: Card,
  title: "design systems/atoms/card",
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {};

export const FullPhoto: Story  = {
  render: () => <PhotoCardStory />,
  name: "full photo",
};

export const AmazonAffliate: Story  = {
  render: () => <AmazonCardStory />,
  name: "amazon affliate",
};

export const CardBuilder: Story  = {
  render: () => <CardBuilderStory />,
  name: "card builder",
};
