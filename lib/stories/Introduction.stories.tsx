import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { VennDiagram } from "@cross-country/components/molecules";
import { defaultCircles } from "@cross-country/components/molecules/venn-diagram/venn-diagram-default-circles";

const meta: Meta<typeof VennDiagram> = {
  component: VennDiagram,
  title: "Cross Country",
} satisfies Meta<typeof VennDiagram>;

export default meta;
type Story = StoryObj<typeof VennDiagram>;

export const VennDiagramStory: Story = {
  render: () => (
    <VennDiagram
      circles={defaultCircles}
      crossLabel="Cross Country"
      width={500}
      height={500}
    />
  ),
};
