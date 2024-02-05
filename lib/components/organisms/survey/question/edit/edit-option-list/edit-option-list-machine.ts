import { createMachine, assign } from "xstate";
import type OptionType from "./types";

export const defaultOptionData: OptionType = {
  id: 1;
  option: "";
};

const createNewOption = (): OptionType => {
  const id = `option_${new Date().getTime()}`;
  return option: OptionType = {
    id,
    option: ""
  }
};


// Build Form State machine
export const editOptionListMachine = createMachine({
  id: "optionList",
  initial: "idle",
  context: {
    options: [],
  },
  states: {
    idle: {
      on: {
        ADD_OPTION: {
          actions: assign({
            options: ({ context: { options } }) => {
              console.log("Machine ADD_OPTION");
              const newQuestion = createNewOption();
              return [...options, newQuestion];
            },
          }),
        },
        UPDATE_OPTION: {
          actions: assign({
            options: ({ context: { options }, event }) => {
              console.log("UPDATE_OPTION event: ", event);
              const updatedQuestions = options.map((question) => {
                if (question.name === event.question.name) {
                  return { ...event.question };
                }
                return question;
              });
              return updatedQuestions;
            },
          }),
        },
        UPDATE_OPTIONS: {
          actions: assign({
            options: ({ context: { options }, event }) => {
              console.log("UPDATE_OPTIONS event: ", event);
              return [...event.options];
            },
          }),
        },
        REMOVE_OPTION: {
          actions: assign({
            options: ({ context: { options }, event }) => {
              console.log("REMOVE_OPTION event: ", event);
              const filteredQuestions = options.filter(
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
