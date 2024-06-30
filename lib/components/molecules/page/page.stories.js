import Page from "./page";
import PageStory from "./page-story";

export default {
  title: "design system/molecules/page",
};

export const Page = {
  render: () => <Page />,
  name: "page",
};

export const CustomPage = {
  render: () => <PageStory />,
  name: "custom page",
};
