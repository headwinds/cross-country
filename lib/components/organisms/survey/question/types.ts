import type { OptionType } from "./edit/edit-option-list/types";
enum Questions {
  multipleChoice = "multipleChoice",
  text = "text",
  answerInput = "answerInput",
}

export type QuestionType = {
  id: number;
  name: string;
  question: string | null; // rarely you might only need the answer which is useful for the first question when one might ask the for title of a form
  answer: string | null; // not all questions have answers
  section?: string;
  questionType: keyof typeof Questions;
  placeholder?: string;
  isRequired?: boolean;
  order?: number;
  userId?: string;
  isComplete: boolean; // begins in a draft mode while creating the question
  event: string; // make enums for event types!
};

export type MultipleChoiceQuestionType = {
  options: OptionType[];
} & QuestionType;

export const QUESTION_VARIANTS = {
  QUESTION_ANSWER: "questionAnswerInput",
  MULTIPLE_CHOICE: "multipleChoiceInput",
  ANSWER: "answerInput",
};
