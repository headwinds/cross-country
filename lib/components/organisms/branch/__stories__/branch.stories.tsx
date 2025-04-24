import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Branch from "./branch-story";

const meta: Meta<typeof Branch> = {
  component: Branch,
  title: "components/organisms/branch",
} satisfies Meta<typeof Branch>;

export default meta;
type Story = StoryObj<typeof Branch>;

export const BranchStory: Story = {
  render: () => <Branch />,
};

/*

<Canvas>
  <Story name="one image">
    <Column>
      <BranchStory hasMultiple={false} isOnlyText={false} />
    </Column>
  </Story>
  <Story name="multiple images">
    <Column>
      <BranchStory hasMultiple isOnlyText={false} />
    </Column>
  </Story>
  <Story name="title only gamestop">
    <Column>
      <BranchStory hasMultiple={false} isOnlyText />
    </Column>
  </Story>
  <Story name="title only killscreen">
    <Column>
      <BranchStory isKillScreen hasMultiple={false} isOnlyText />
    </Column>
  </Story>
</Canvas>
*/
