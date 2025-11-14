import type { Meta, StoryObj } from "@storybook/react-vite";
import Bento from "../bento";
import type { BentoProps } from "../bento";
import { Card, Column, Paragraph } from "../../..";

const meta: Meta<typeof Bento> = {
  component: Bento,
  title: "components/organisms/bento",
} satisfies Meta<typeof Bento>;

export default meta;
type Story = StoryObj<typeof Bento>;

const MainContent = () => {
  return (
    <Column
      customStyle={{
        backgroundColor: "#eaeaba",
        width: "100%",
        height: "100%",
        padding: 0,
        margin: 0,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paragraph>main</Paragraph>
    </Column>
  );
};

const TopContent = () => {
  return (
    <Column
      customStyle={{
        backgroundColor: "#f9daed",
        width: "100%",
        height: "100%",
        padding: 0,
        margin: 0,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paragraph>top</Paragraph>
    </Column>
  );
};

const BottomContent = () => {
  return (
    <Column
      customStyle={{
        backgroundColor: "#b9eccf",
        width: "100%",
        height: "100%",
        padding: 0,
        margin: 0,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paragraph>bottom</Paragraph>
    </Column>
  );
};

const twoByTwoconfig = {
  main: <MainContent />,
  top: <TopContent />,
  bottom: <BottomContent />,
};

const BentoStory = ({
  grid,
  borderRadius = 0,
  gap = 2,
  isMainRight = false,
}: BentoProps) => {
  if (grid === "3") {
    return (
      <Bento
        grid={grid}
        borderRadius={borderRadius}
        gap={gap}
        isMainRight={isMainRight}
        boxes={twoByTwoconfig}
      />
    );
  }

  return (
    <Bento
      grid={grid}
      borderRadius={borderRadius}
      gap={gap}
      isMainRight={isMainRight}
    />
  );
};

export const ThreeBoxBentoStory: Story = {
  render: () => (
    <BentoStory grid="3" gap={2} borderRadius={0} isMainRight={true} />
  ),
};

export const SixBoxBentoStory: Story = {
  render: () => <BentoStory grid="6" gap={5} borderRadius={20} />,
};

export const TenBoxBentoStory: Story = {
  render: () => <BentoStory grid="10" gap={5} borderRadius={8} />,
};

export const ElevenBoxBentoStory: Story = {
  render: () => <BentoStory grid="11" gap={5} borderRadius={0} />,
};
