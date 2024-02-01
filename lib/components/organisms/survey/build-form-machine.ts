import { createMachine, assign } from "xstate";
import type QuestionType from "./question/types";
/*
Build form machine 

I need to be able to:
- add, update and remove questions
- build a form from a JSON object.
- the form should begin with 1 required question - what is the title of the form?

const defaultData = {
  title: "No title",
  description: "",
  customClasses: {
    headline: "text-3xl",
    paragraph: "m-2",
  },
};

*/

const defaultQuestionData: QuestionType = {
  id: 1,
  name: "first_question",
  question: "What is your question?",
  answer: "",
  placeholder: "Enter your title",
  required: true,
  questionType: "text",
  errorMessage: "A title is required",
  order: 1,
  userId: "1",
  section: "",
  isComplete: false, // while working on the question it should be false
};

const createNewQuestion = (): QuestionType => {
  const id = `question_${new Date().getTime()}`;
  const newQuestion: QuestionType = {
    ...defaultQuestionData,
    name: id,
    id,
  };
  return newQuestion;
};

type FormField = {
  question?: string;
  questionType: "title" | "text" | "multipleChoice";
  options?: string[];
  answer?: string;
};

// Build Form State machine
export const buildFormMachine = createMachine({
  id: "buildForm",
  initial: "idle",
  context: {
    // form builder questions
    questions: [
      {
        id: 1,
        name: "title",
        question: "What is the title of your form?", // draft
        answer: "",
        placeholder: "Enter your title",
        isRequired: true,
        questionType: "answerInput", // we only need the answer
        errorMessage: "A title is required",
        order: 1,
        userId: "1",
        section: "",
        isComplete: false,
      },
      {
        id: 2,
        name: "description",
        question: "What is the description of your form? (optional)", // draft
        answer: "",
        placeholder: "Enter your description",
        isRequired: false,
        questionType: "answerInput", // we only need the answer
        order: 2,
        userId: "1",
        section: "",
        isComplete: false,
      },
    ],
    // we ask a series of questions to build up the form fields to be displayed in the final quiz or survey
    // do I really need this second list when they should match in length?!
    formFields: [],
    customClasses: {
      headline: "text-3xl",
      paragraph: "m-2",
    },
  },
  states: {
    idle: {
      on: {
        ADD_QUESTION: {
          actions: assign({
            questions: ({ context: { questions } }) => {
              console.log("Machine ADD_QUESTION");
              const newQuestion = createNewQuestion();
              return [...questions, newQuestion];
            },
          }),
        },
        UPDATE_QUESTION: {
          actions: assign({
            questions: ({ context: { questions }, event }) => {
              console.log("UPDATE_QUESTION event: ", event);
              const updatedQuestions = questions.map((question) => {
                if (question.name === event.question.name) {
                  return { ...event.question };
                }
                return question;
              });
              return updatedQuestions;
            },
          }),
        },
        REMOVE_QUESTION: {
          actions: assign({
            questions: ({ context: { questions }, event }) => {
              console.log("REMOVE_QUESTION event: ", event);
              const filteredQuestions = questions.filter(
                (question) => question.name !== event.question.name
              );
              return filteredQuestions;
            },
          }),
        },
      },
    },
  },
});
