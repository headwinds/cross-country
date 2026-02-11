import React, { useEffect, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import KeyValuePairs from "../key-value-pairs";
import { type KeyValue, VALUE_TYPE } from "../key-value-pairs.types";
import { Column } from "@/components";

const meta: Meta<typeof KeyValuePairs> = {
  component: KeyValuePairs,
  title: "components/molecules/key-value-pairs",
} satisfies Meta<typeof KeyValuePairs>;

export default meta;
type Story = StoryObj<typeof KeyValuePairs>;

export const KeyValuePairsTextStory: Story = {
  render: () => {
    const keyStyle = {
      color: "#333",
      fontSize: 14,
      fontWeight: "400",
      fontFamily: "Helvetica, sans-serif",
    };
    const valueStyle = { color: "#333", fontSize: 16, fontWeight: "600" };
    const keyValues: KeyValue[] = [
      { id: 0, key: "name", value: "Matthew Pocock", type: VALUE_TYPE.TEXT as keyof typeof VALUE_TYPE },
      { id: 1, key: "profession", value: "Typescript Wizard", type: VALUE_TYPE.TEXT as keyof typeof VALUE_TYPE },
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

export const KeyValuePairsInputTextStory: Story = {
  render: () => {

    const keyValues: KeyValue[] = [
      {
        id: 0,
        key: "name",
        value: "Matthew Pocock",
        defaultValue: "Matthew Pocock",
        type: VALUE_TYPE.INPUT_TEXT as keyof typeof VALUE_TYPE,
      },
      {
        id: 1,
        key: "profession",
        value: "Typescript Wizard",
        defaultValue: "Typescript Wizard",
        type: VALUE_TYPE.INPUT_TEXT as keyof typeof VALUE_TYPE,
      },
    ];
    const keyStyle = {
      color: "#333",
      fontSize: 14,
      fontWeight: "400",
      fontFamily: "Helvetica, sans-serif",
    };
    const valueStyle = { color: "#333", fontSize: 16, fontWeight: "600" };

    const onChange = (id: number, newValue: string) => {
      console.log(`KeyValue with id ${id} changed to: ${newValue}`);
    };
    
    return (
      <Column customStyle={{ width: 280 }}>
        <KeyValuePairs
          keyStyle={keyStyle}
          valueStyle={valueStyle}
          keyValues={keyValues}
          onChange={onChange}
        />
      </Column>
    );
  },
};
