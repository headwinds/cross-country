import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import VennDiagram from "../venn-diagram";
import { Column } from "../../..";
import { defaultCircles, twoCircles } from "../venn-diagram-default-circles";

const meta: Meta<typeof VennDiagram> = {
  component: VennDiagram,
  title: "components/molecules/venn diagram",
} satisfies Meta<typeof VennDiagram>;

export default meta;
type Story = StoryObj<typeof VennDiagram>;

export const VennDiagramStory: Story = {
  render: () => (
    <VennDiagram
      circles={defaultCircles}
      crossLabel={{
        label: "Cross Country",
        indent: 380,
        textY: 0,
        startY: 30,
      }}
      x={0}
      y={0}
      dot={{ cx: 250, cy: 210, r: 3 }}
    />
  ),
};

export const VennDiagramTwoCirclesStory: Story = {
  render: () => {
    return (
      <VennDiagram
        circles={twoCircles}
        crossLabel={{
          label: "Magic",
          indent: 350,
          textY: -20,
          startY: 30,
        }}
        verticalLineY={70}
        angleLineY={60}
      />
    );
  },
};

export const VennDiagramMobileStory: Story = {
  // should render on mobile with a width of 300 and not be clipped
  render: () => (
    <Column customStyle={{ width: 300, height: 500 }}>
      <VennDiagram
        circles={defaultCircles}
        crossLabel={{
          label: "Cross Country",
          indent: 380,
          textY: 0,
          startY: 30,
        }}
        x={0}
        y={0}
        dot={{ cx: 250, cy: 210, r: 3 }}
        width={300}
        height={200}
      />
    </Column>
  ),
};
