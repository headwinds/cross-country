import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import VennDiagram from "../venn-diagram";
import { defaultCircles } from "../venn-diagram-default-circles";

const meta: Meta<typeof VennDiagram> = {
  component: VennDiagram,
  title: "components/molecules/venn diagram",
} satisfies Meta<typeof VennDiagram>;

export default meta;
type Story = StoryObj<typeof VennDiagram>;

export const VennDiagramStory: Story = {
  render: () => <VennDiagram circles={defaultCircles} />,
};
