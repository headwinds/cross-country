import TreeStory from "./tree-story";
import { Paragraph, RelatedArticles } from "../../../";
import Prism from "prismjs";

export default {
  title: "design system/molecules/tree",
};

export const SimpleTree = {
  render: () => <TreeStory />,
  name: "simple tree",
};

export const RecursiveTree = {
  render: () => <TreeStory strategy="recursive" />,
  name: "recursive tree",
};
