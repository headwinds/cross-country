import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import AnimatedColumn from "../animated-column";
import {
  Cleric,
  Wizard,
  Warrior,
  Hunter,
} from "@headwinds/cross-country/components";

const meta: Meta<typeof AnimatedColumn> = {
  component: AnimatedColumn,
  title: "components/molecules/animated-column",
} satisfies Meta<typeof AnimatedColumn>;

export default meta;
type Story = StoryObj<typeof AnimatedColumn>;

export const DefaultFadeInAnimationStory: Story = {
  render: () => (
    <AnimatedColumn>
      <Wizard />
    </AnimatedColumn>
  ),
};

export const SlideAnimationStory: Story = {
  render: () => {
    // slide from left to right
    const animation = {
      from: { transform: "translateX(-100%)" },
      to: { transform: "translateX(0)" },
      config: {
        mass: 1,
        tension: 280,
        friction: 60,
      },
    };
    return (
      <AnimatedColumn animation={animation}>
        <Hunter />
      </AnimatedColumn>
    );
  },
};

export const GrowSlideUpAnimationStory: Story = {
  render: () => {
    // slide from left to right
    const animation = {
      from: { transform: "translateY(100%)" },
      to: { transform: "translateY(0)" },
      config: {
        mass: 1,
        tension: 280,
        friction: 60,
      },
    };
    return (
      <AnimatedColumn animation={animation}>
        <Cleric />
      </AnimatedColumn>
    );
  },
};

/*
Do I want the container to grow or the actor to grow? 
export const GrowBigAnimationStory: Story = {
  render: () => {
    const animation = {
      from: { width: 0, height: 0 },
      to: { width: 200, height: 200 },
      config: {
        mass: 1,
        tension: 280,
        friction: 60,
        duration: 3000,
      },
      delay: 1000, // 1 second delay
    };
    return (
      <AnimatedColumn animation={animation}>
        <Warrior />
      </AnimatedColumn>
    );
  },
};
*/
