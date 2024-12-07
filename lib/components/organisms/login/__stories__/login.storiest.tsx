import type { Meta, StoryObj } from "@storybook/react";
import Login from "../login";

const meta: Meta<typeof Login> = {
  component: Login,
  title: "components/organisms/login",
} satisfies Meta<typeof Login>;

export default meta;
type Story = StoryObj<typeof Login>;

export const LoginStory: Story = {
  render: () => <Login />,
};

/*
export const UserLoginStory: Story = {
  render: () => {
    const [user, setUser] = useState(null);

    const onChange = (user: UserModelType) => {
      // handle the authenitcated user event here and
      // present a profile or switch routes; whatever you want to do
      if (user) {
        setUser(user);
      }
    };

    return user ? (
      <Column>
        <Paragraph>hello {user.username}</Paragraph>
      </Column>
    ) : (
      <Login
        isAnimated
        hasBackground={false}
        onChange={onChange}
      />
    },
};
*/
