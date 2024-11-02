import type { Meta, StoryObj } from "@storybook/react";
import Link from "../../link/link";
import Column from "../column";
import Image from "../../image";
import pale from "./the_pale_beyond.jpg";

const meta: Meta<typeof Column> = {
  component: Column,
  title: "components/atoms/column",
} satisfies Meta<typeof Column>;

export default meta;
type Story = StoryObj<typeof Column>;

export const ColumnStory: Story = {
  render: () => (
    <Column>
      <Image url={pale} />
    </Column>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Column
      customStyle={{
        backgroundColor: "hsla(60, 100%, 25%, 75%)",
      }}
    >
      <Column>hello</Column>
      <Column>I'm a stack of olive</Column>
      <Column>hlsa Column components</Column>
      <Column>
        oooh{" "}
        <Link url="https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl">
          oklch
        </Link>
      </Column>
    </Column>
  ),
};
