import { Paragraph, SubHeadline, RelatedArticles } from "../../../../";
import HeadwindsHomeStory from "./headwinds-home-story";
import HeadwindsHomeHeroStory from "./headwinds-home-hero-story";
import Prism from "prismjs";

export default {
  title: "design system/templates/headwinds home",
};

export const HeadwindsHome = {
  render: () => <HeadwindsHomeStory />,
  name: "headwinds home",
};

export const HeadwindsHomeHero = {
  render: () => <HeadwindsHomeHeroStory />,
  name: "headwinds home hero",
};
