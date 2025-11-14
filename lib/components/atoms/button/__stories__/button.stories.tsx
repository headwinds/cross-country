import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "../button";
import retro from "./retro.wav";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "components/atoms/button",
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonStory: Story = {
  render: () => <Button>Click Me</Button>,
};

export const Secondary: Story = {
  render: () => <Button themeColor="secondary">Click Me</Button>,
};

export const Outlined: Story = {
  render: () => <Button variant="outlined">Click Me</Button>,
};

export const WithSound: Story = {
  render: () => <Button sound={retro}>Click Me</Button>,
};

export const Disabled: Story = {
  render: () => <Button isDisabled>Click Me</Button>,
};
