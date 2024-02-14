import { createMachine, assign } from "xstate";
import type { OptionType } from "./types";

export const defaultOptionData: OptionType = {
  id: 1,
  option: "",
};

const createNewOption = () => {
  const id = `option_${new Date().getTime()}`;
  return {
    id,
    value: "",
  };
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
              const option = createNewOption();
              return [...options, option];
            },
          }),
        },
        UPDATE_OPTION: {
          actions: assign({
            options: ({ context: { options }, event }) => {
              console.log("UPDATE_OPTION event: ", event);
              const { id, value } = event.data;
              return options.map((option) => {
                if (option.id === id) {
                  return { id, value };
                }
                return option;
              });
            },
          }),
        },
        UPDATE_OPTIONS: {
          actions: assign({
            options: ({ context: { options }, event }) => {
              console.log("Machine UPDATE_OPTIONS");
              console.log("UPDATE_OPTIONS event: ", event);
              return [...event.options];
            },
          }),
        },
        REMOVE_OPTION: {
          actions: assign({
            options: ({ context: { options }, event }) => {
              console.log("REMOVE_OPTION event: ", event);
              const filteredOptions = options.filter(
                (option) => option.id !== event.id
              );
              return filteredOptions;
            },
          }),
        },
      },
    },
  },
});
