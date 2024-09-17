import { STORYBOOK } from "../../../../constants";
import { Paragraph, SubHeadline } from "../../../";
import BranchesStory from "./branches-story";

export default {
  title: "components/organisms/branches",
};

export const Branches = {
  render: () => <BranchesStory />,
  name: "branches",
};
