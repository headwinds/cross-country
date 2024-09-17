import { Paragraph, SubHeadline } from "../../../";
import UserStory from "./user-story";

export default {
  title: "components/molecules/user",
};

export const User = {
  render: () => <UserStory />,
  name: "user",
};

export const AnonymousUser = {
  render: () => <UserStory isAnon={true} />,
  name: "anonymous user",
};
