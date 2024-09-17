//import PostLink from '../post-link';
import ListicleStory from "./listicle-story";
import ListicleBuilderStory from "./listicle-builder-story";
import AndorStory from "./andor-right-click-story";
import { Paragraph, Link, Hilight } from "../../../";

export default {
  title: "components/organisms/listicle",
};

export const Listicle = {
  render: () => <ListicleStory />,
  name: "listicle",
};

export const ListicleBuilder = {
  render: () => <ListicleBuilderStory />,
  name: "listicle builder",
};
