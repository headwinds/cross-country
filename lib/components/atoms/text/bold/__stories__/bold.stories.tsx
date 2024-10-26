import type { Meta, StoryObj } from "@storybook/react";
import Bold from "../bold";
import Paragraph from "../../paragraph";
import styles from "../bold.module.css";

const meta: Meta<typeof Bold> = {
  component: Bold,
  title: "components/atoms/text/bold",
} satisfies Meta<typeof Bold>;

export default meta;
type Story = StoryObj<typeof Bold>;

export const BoldStory: Story = {
  render: (args) => (
    <Paragraph>
      Joan of{" "}
      <Bold {...args} customClass={styles.storyBold}>
        Arc
      </Bold>
    </Paragraph>
  ),
};
