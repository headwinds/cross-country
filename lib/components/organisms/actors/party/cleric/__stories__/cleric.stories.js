import Cleric from "../cleric";
import { Link, RelatedArticles, Stage, Paragraph } from "../../../../../";
import styles from "../cleric.module.css";
import { clericStoryModel } from "./cleric-story-model";

export default {
  title: "design system/organisms/actors/cleric",
};

export const Cleric = {
  render: () => <Cleric model={clericStoryModel} />,
  name: "cleric",
};
