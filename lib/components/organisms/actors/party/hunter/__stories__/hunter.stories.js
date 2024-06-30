import Hunter from "../hunter";
import { Link, RelatedArticles, Stage, Paragraph } from "../../../../../";
import styles from "../hunter.module.css";
import { hunterStoryModel } from "./hunter-story-model";
import HunterNextMeetingStory from "./hunter-next-meeting-story";

export default {
  title: "design system/organisms/actors/hunter",
};

export const Hunter = {
  render: () => <Hunter model={hunterStoryModel} />,
  name: "hunter",
};

export const NextMeeting = {
  render: () => <HunterNextMeetingStory />,
  name: "next meeting",
};
