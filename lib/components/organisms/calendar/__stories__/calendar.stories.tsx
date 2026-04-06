import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Calendar from "../calendar";

const meta: Meta<typeof Calendar> = {
  component: Calendar,
  title: "components/organisms/calendar",
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof Calendar>;

// no days selected
export const CalendarStory: Story = {
  render: () => <Calendar selectedDate={null} />,
};

// today selected
export const CalendarTodaySelected: Story = {
  render: () => <Calendar selectedDate={new Date()} />,
};

// show previous and next month days to fill the grid
export const CalendarFullGrid: Story = {
  render: () => <Calendar isFullGrid={true} />,
};
