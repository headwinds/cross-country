import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import KeyValuePairs from "../key-value-pairs";
import { Column } from "@/lib/components";

const meta: Meta<typeof KeyValuePairs> = {
  component: KeyValuePairs,
  title: "components/molecules/key-value-pairs",
} satisfies Meta<typeof KeyValuePairs>;

export default meta;
type Story = StoryObj<typeof KeyValuePairs>;

export const KeyValuePairsStory: Story = {
  render: () => {
    const keyStyle = {
      color: "#333",
      fontSize: 14,
      fontWeight: "400",
      fontFamily: "Helvetica, sans-serif",
    };
    const valueStyle = { color: "#333", fontSize: 16, fontWeight: "600" };
    const keyValues = [
      { id: 0, key: "name", value: "Matthew Pocock" },
      { id: 1, key: "profession", value: "Typescript Wizard" },
    ];
    return (
      <Column customStyle={{ width: 280 }}>
        <KeyValuePairs
          keyStyle={keyStyle}
          valueStyle={valueStyle}
          keyValues={keyValues}
        />
      </Column>
    );
  },
};
