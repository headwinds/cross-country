import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { VennDiagram } from "@cross-country/components/molecules";

const meta: Meta<typeof VennDiagram> = {
  component: VennDiagram,
  title: "Cross Country",
} satisfies Meta<typeof VennDiagram>;

export default meta;
type Story = StoryObj<typeof VennDiagram>;

export const VennDiagramStory: Story = {
  render: () => (
    <VennDiagram crossLabel="Cross Country" width={500} height={500} />
  ),
};
