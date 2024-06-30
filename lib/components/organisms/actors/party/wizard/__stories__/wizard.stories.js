import Wizard from "../wizard";
import { Link, RelatedArticles, Stage, Paragraph } from "../../../../../";
import styles from "../wizard.module.css";
import { wizardStoryModel } from "./wizard-story-model";

export default {
  title: "design system/organisms/actors/wizard",
};

export const Wizard = {
  render: () => <Wizard model={wizardStoryModel} />,
  name: "wizard",
};
