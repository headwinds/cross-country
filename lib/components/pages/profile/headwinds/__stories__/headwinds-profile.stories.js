import { Paragraph, SubHeadline } from "../../../..";
import HeadwindsProfileStory from "./headwinds-profile-story";

export default {
  title: "design system/pages/profile/headwinds",
};

export const HeadwindsProfile = {
  render: () => <HeadwindsProfileStory />,
  name: "headwinds profile",
};

export const Loading = {
  render: () => <HeadwindsProfileStory isLoading />,
  name: "loading",
};
