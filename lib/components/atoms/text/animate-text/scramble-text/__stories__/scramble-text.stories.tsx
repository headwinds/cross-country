import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ScrambleText from "../scramble-text";

const meta: Meta<typeof ScrambleText> = {
  component: ScrambleText,
  title: "components/atoms/text/animated-text/scramble-text",
} satisfies Meta<typeof ScrambleText>;

export default meta;
type Story = StoryObj<typeof ScrambleText>;

export const ScrambleTextStory: Story = {
  render: () => (
    <ScrambleText
      text="What a day for a day dreamer"
      customStyle={{ fontFamily: "sans-serif", fontSize: 24 }}
    />
  ),
};
