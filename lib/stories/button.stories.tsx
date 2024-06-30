import type { Meta, StoryObj } from "@storybook/react";

const Button = (props: { primary: boolean; label: string }) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: props.primary ? "blue" : "white" }}
    >
      {props.label}
    </button>
  );
};

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Atoms/Button",
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};
