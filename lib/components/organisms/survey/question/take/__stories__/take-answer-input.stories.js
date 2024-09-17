import MultipleChoiceStory from "./multiple-choice-story";
import TakeAnswerInputStory from "./take-answer-input-story";
import TakeAnswerDateTimeInputStory from "./take-answer-date-time-input-story";

export default {
  title: "components/organisms/survey/question/text input single row",
};

export const TextInput = {
  render: () => <TakeAnswerInputStory />,
  name: "text input",
};

export const DateTime = {
  render: () => <TakeAnswerDateTimeInputStory />,
  name: "date time",
};
