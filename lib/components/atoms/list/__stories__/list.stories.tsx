import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import List from "../list";
import ListItem from "@/lib/components/atoms/list/list-item/list-item";

const meta: Meta<typeof List> = {
  component: List,
  title: "components/atoms/list",
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof List>;

export const Default: Story = {
  render: () => (
    <List>
      <ListItem>Apples</ListItem>
      <ListItem>Matches</ListItem>
      <ListItem>{null}</ListItem>
      <ListItem>{null}</ListItem>
      <ListItem>{null}</ListItem>
      <ListItem>Coffee</ListItem>
    </List>
  ),
};

const NullComponent = () => {
  return null;
};

// null components should not take up space
export const WithNullComponents: Story = {
  render: () => (
    <List>
      <ListItem>Apples</ListItem>
      <ListItem>Matches</ListItem>
      <ListItem>
        <NullComponent />
      </ListItem>
      <ListItem>
        <NullComponent />
      </ListItem>
      <ListItem>Coffee</ListItem>
    </List>
  ),
};
