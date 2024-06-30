import Login from "../login";

import { Paragraph, Link, Hilight, SubHeadline, Column } from "../../../";
import LoginStory from "./login-story";

export default {
  title: "components/organisms/login",
};

export const Login = {
  render: () => <SubHeadline text="Simple Version" />,
  name: "login",
};

export const LoginWithAnimations = {
  render: () => <SubHeadline text="Animated Version" />,
  name: "login with animations",
};
