import React from "react";
import { useMachine } from "@xstate/react";
import { createMachine, assign, actions } from "xstate";
import styles from "./text-input.module.css";

import clsx from "clsx";

const { send, cancel } = actions;

// Define the machine
const inputMachine = createMachine(
  {
    id: "input",
    initial: "typing",
    context: {
      inputValue: "",
    },
    states: {
      typing: {
        on: {
          INPUT_CHANGE: {
            actions: [
              assign({
                inputValue: (_, event) => event.value,
              }),
              "debounceInput",
            ],
          },
        },
      },
    },
    on: {
      DEBOUNCED_INPUT: {
        actions: assign({
          inputValue: (context, event) => event.value,
        }),
      },
    },
  },
  {
    actions: {
      debounceInput: send(
        (_, event) => ({
          type: "DEBOUNCED_INPUT",
          value: event.value,
        }),
        {
          delay: 200, // Debounce time in milliseconds
          id: "input-debounce", // Unique ID to cancel the previous debounce event
        }
      ),
      cancelDebounce: cancel("input-debounce"),
    },
  }
);

export const InputField = ({ customClass = "", customStyle = {} }) => {
  const [state, send] = useMachine(inputMachine);

  const handleChange = (event) => {
    send("INPUT_CHANGE", { value: event.target.value });
  };

  return (
    <input
      type="text"
      value={state.context.inputValue}
      className={clsx(styles.textInput, customClass)}
      style={customStyle}
      onChange={handleChange}
    />
  );
};
