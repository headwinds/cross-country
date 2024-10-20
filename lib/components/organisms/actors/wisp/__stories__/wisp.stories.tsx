import type { Meta, StoryObj } from "@storybook/react";

interface TemplateProps {
  message: string;
}
const Template = ({ message }: TemplateProps) => <p>{message}</p>;

const meta: Meta<typeof Template> = {
  component: Template,
  title: "components/organisms/actors/wisp",
} satisfies Meta<typeof Template>;

export default meta;
type Story = StoryObj<typeof Template>;

export const WispStory: Story = {
  args: {
    message: "hello world",
  },
};
