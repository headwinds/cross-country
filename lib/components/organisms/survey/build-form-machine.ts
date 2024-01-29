import { createMachine, assign } from "xstate";

/*
Build form machine 

I need to be able to:
- add, update and remove questions
- build a form from a JSON object.


const defaultData = {
  title: "No title",
  description: "",
  customClasses: {
    headline: "text-3xl",
    paragraph: "m-2",
  },
};

*/

// Build Form State machine
export const buildFormMachine = createMachine({
  id: "buildForm",
  initial: "idle",
  context: {
    title: "No title",
    description: "",
    questions: [],
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
            questions: ({ questions }, event) => [...questions, event.question],
          }),
        },
        UPDATE_QUESTION: {
          actions: assign({
            questions: ({ questions }, event) => {
              const updatedQuestions = questions.map((question) => {
                if (question.id === event.question.id) {
                  return { ...question, ...event.question };
                }
                return question;
              });
              return updatedQuestions;
            },
          }),
        },
        REMOVE_QUESTION: {
          actions: assign({
            questions: ({ questions }, event) => {
              const filteredQuestions = questions.filter(
                (question) => question.id !== event.questionId
              );
              return filteredQuestions;
            },
          }),
        },
        UPDATE_TITLE: {
          actions: assign({
            title: ({ event }) => {
              console.log("Machine UPDATE_TITLE: ", event);
              return event.data.title;
            },
          }),
        },
      },
    },
  },
});
