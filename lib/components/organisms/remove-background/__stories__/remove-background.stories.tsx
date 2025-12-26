import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import RemoveBackground from "../remove-background";
import Login from "../../login";

const meta: Meta<typeof RemoveBackground> = {
  component: RemoveBackground,
  title: "components/organisms/remove-background",
} satisfies Meta<typeof RemoveBackground>;

export default meta;
type Story = StoryObj<typeof RemoveBackground>;

export const RemoveBackgroundStory: Story = {
  render: () => {
    // get id from local storage for testing purposes
    const userAccountId = localStorage.getItem("userAccountId");

    return (
      <RemoveBackground
        userAccountId={userAccountId ? userAccountId : undefined}
      />
    );
  },
};

export const RemoveBackgroundLoginStory: Story = {
  render: () => {
    const [userAccount, setUserAccount] = React.useState<string | null>(null);

    const handleChange = (account: string | null) => {
      setUserAccount(account);
    };

    return (
      <>
        <Login onChange={handleChange} />
        <RemoveBackground
          userAccountId={userAccount ? userAccount : undefined}
        />
      </>
    );
  },
};
