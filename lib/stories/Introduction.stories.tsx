import type { Meta, StoryObj } from "@storybook/react";

const Intro = (props: { primary: boolean; label: string }) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: props.primary ? "blue" : "white" }}
    >
      {props.label}
    </button>
  );
};

const meta: Meta<typeof Intro> = {
  component: Intro,
  title: "Cross Country",
} satisfies Meta<typeof Intro>;

export default meta;
type Story = StoryObj<typeof Intro>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};
