import React from "react";
import { useMachine } from "@xstate/react";
import { createMachine, assign } from "xstate";
import styles from "./text-input.module.css";

import clsx from "clsx";

const inputMachine = createMachine(
  {
    id: "input",
    initial: "typing",
    context: {
      inputValue: "",
      send: undefined, // Add send as a context property
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
          inputValue: (_, event) => event.value,
        }),
      },
    },
  },
  {
    actions: {
      debounceInput: (context) => {
        context.send("DEBOUNCED_INPUT", {
          value: context.inputValue,
        });
      },
    },
  }
);

const InputField = ({ customClass = "", customStyle = {}, placeholder }) => {
  const [state, send] = useMachine(inputMachine);

  const handleChange = (event) => {
    send("INPUT_CHANGE", { value: event.target.value });
  };

  // Update the context with the send function
  React.useEffect(() => {
    send({ type: "xstate.assign", property: "send", value: send });
  }, [send]);

  return (
    <input
      type="text"
      value={state.context.inputValue}
      className={clsx(styles.textInput, customClass)}
      style={customStyle}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default InputField;
