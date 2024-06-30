import {
  Column,
  SubHeadline,
  TextInput,
  Button,
  Row,
  Label,
  Paragraph,
  TextAnswerInput,
  AnswerInput,
  TextAreaAnswerInput,
} from "../../../../../";

export default {
  title: "design system/organisms/survey/question",
};

export const TextInput = {
  render: () => (
    <TextAnswerInput
      hasActions={false}
      helperText={""}
      data={{
        question: "Who lead the creation of Rez?",
        answer: "Tetsuya Mizuguchi",
        isRequired: false,
      }}
    />
  ),

  name: "text input",
};

export const TextArea = {
  render: () => (
    <TextAreaAnswerInput
      rows={10}
      hasActions={false}
      helperText={""}
      data={{
        question: "What makes Rez so special?",
        answer: "Tetsuya Mizuguchi",
        isRequired: false,
      }}
    />
  ),

  name: "text area",
};

export const TextInputMultiRow = {
  render: () => (
    <AnswerInput
      rows={10}
      hasActions={false}
      helperText={""}
      data={{
        question: "What makes Rez so special?",
        answer: "Tetsuya Mizuguchi",
        isRequired: false,
      }}
    />
  ),

  name: "text input multi row",
};
