import { Paragraph, SubHeadline } from "../../../../../";
import EditQuestionStory from "./edit-question-story";

export default {
  title: "design system/organisms/survey/build/edit question",
};

export const Text = {
  render: () => <EditQuestionStory questionType="text" />,
  name: "text",
};

export const AnswerInput = {
  render: () => (
    <EditQuestionStory
      questionType="answerInput"
      question="what is the answer?"
    />
  ),
  name: "answer input",
};

export const MultipleChoice = {
  render: () => <EditQuestionStory questionType="multipleChoice" />,
  name: "multiple choice",
};
