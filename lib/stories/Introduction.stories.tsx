import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components";

const Intro = ({ children }: { children: React.ReactNode }) => {
  return <Button>{children}</Button>;
};

const meta: Meta<typeof Intro> = {
  component: Intro,
  title: "Cross Country",
} satisfies Meta<typeof Intro>;

export default meta;
type Story = StoryObj<typeof Intro>;

export const ButtonStory: Story = {
  args: {
    children: "Click Me",
  },
};
