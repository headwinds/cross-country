//@ts-nocheck

import type { Meta, StoryObj } from "@storybook/react";
import Link from "../../link/link";
import Column from "../column";
import Image from "../../image";
import Paragraph from "@headwinds/cross-country/components/atoms/text/paragraph";
import pale from "./the_pale_beyond.jpg";
import styles from "./story.module.css";

const meta: Meta<typeof Column> = {
  component: Column,
  title: "components/atoms/column",
} satisfies Meta<typeof Column>;

export default meta;
type Story = StoryObj<typeof Column>;

export const ImgColumnStory: Story = {
  render: () => (
    <Column customClass={styles.imgStoryColumn}>
      <Image url={pale} />
    </Column>
  ),
};

const SingleColumn = ({ children }) => (
  <Column customClass={styles.singleColumn}>{children}</Column>
);

export const MultipleColumnStory: Story = {
  render: () => (
    <Column
      customClass={styles.multipleColumn}
      customStyle={{
        backgroundColor: "hsla(60, 100%, 25%, 75%)",
      }}
    >
      <SingleColumn>
        <Paragraph>hello</Paragraph>
      </SingleColumn>
      <SingleColumn>
        <Paragraph>I'm a stack of olive</Paragraph>
      </SingleColumn>
      <SingleColumn>
        <Paragraph>hlsa Column components</Paragraph>
      </SingleColumn>
      <SingleColumn>
        <Paragraph>
          oooh *turns head and whistles* why hellllooo{" "}
          <Link url="https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl">
            oklch
          </Link>
        </Paragraph>
      </SingleColumn>
    </Column>
  ),
};
