import Warrior from "../warrior";
import { Link, RelatedArticles, Stage, Paragraph } from "../../../../../";
import styles from "../warrior.module.css";
import { warriorStoryModel } from "./warrior-story-model";

export default {
  title: "design system/organisms/actors/warrior",
};

export const Warrior = {
  render: () => <Warrior model={warriorStoryModel} />,
  name: "warrior",
};
