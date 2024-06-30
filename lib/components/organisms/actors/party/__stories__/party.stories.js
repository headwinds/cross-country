import Hunter from "../hunter";
import Cleric from "../cleric";
import Wizard from "../wizard";
import Warrior from "../warrior";
import Wisp from "../../wisp";
import { Link, RelatedArticles, Stage } from "../../../../";
import {
  hunterStoryModel,
  warriorStoryModel,
  clericStoryModel,
  wizardStoryModel,
} from "./party-story-model";

export default {
  title: "design system/organisms/actors/party",
};

export const Party = {
  render: () => <Hunter model={hunterStoryModel} />,
  name: "party",
};
