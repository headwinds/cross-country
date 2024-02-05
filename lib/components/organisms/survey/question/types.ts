import type { Option } from "./option-list/types";
enum Questions {
  multipleChoice = "multipleChoice",
  text = "text",
  answerInput = "answerInput",
}

export type OptionType = {
  option: string;
  id: string;
};

export type QuestionType = {
  id: number;
  name: string;
  question: string | null; // rarely you might only need the answer which is useful for the first question when one might ask the for title of a form
  answer: string | null; // not all questions have answers
  questionType: keyof typeof Questions;
  placeholder?: string;
  isRequired?: boolean;
  order?: number;
  userId?: string;
  isComplete: boolean; // begins in a draft mode while creating the question
};

export type MultipleChoiceQuestionType = {
  options: OptionType[];
} & QuestionType;