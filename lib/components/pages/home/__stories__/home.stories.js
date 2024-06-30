import { Paragraph, SubHeadline } from "../../../";
import HomeStory from "./home-story";

export default {
  title: "design system/pages/home",
};

export const Home = {
  render: () => <HomeStory />,
  name: "home",
};

export const Loading = {
  render: () => <HomeStory isLoading />,
  name: "loading",
};
