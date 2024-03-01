//import { css } from "../../../styled-system/css";
import { useActor } from "@xstate/react";
import { autocompleteMachine } from "./autocomplete-machine";
import type { ActorOptions, AnyActorLogic } from "xstate";
//import { useClickAway } from "@uidotdev/usehooks";

interface TextInputProps {
  actorOptions: ActorOptions<AnyActorLogic> | undefined;
}

const TextInput = ({ actorOptions }: TextInputProps) => {
  const [state, send] = useActor(autocompleteMachine, actorOptions);
  /*
  const ref = useClickAway<HTMLDivElement>(() => {
    send({
      type: "combobox.click-outside",
    });
  });*/

  return (
    <div>
      <div>
        <input
          placeholder="Type your search..."
          value={state.context.searchInput}
          onChange={(e) => {
            send({
              type: "input.change",
              searchInput: e.target.value,
            });
          }}
          onFocus={() => {
            send({
              type: "input.focus",
            });
          }}
        />

        {state.hasTag("Display loader") === true ? (
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </span>
        ) : null}

        {state.matches("Active") === true ? (
          <ul>
            {state.context.availableItems.length === 0 ? (
              <div>
                {state.context.lastFetchedSearch === ""
                  ? "Start typing to see some results here."
                  : "No results matching this query."}
              </div>
            ) : (
              state.context.availableItems.map((item, index) => (
                <li
                  key={item}
                  aria-selected={state.context.activeItemIndex === index}
                  onMouseEnter={() => {
                    send({
                      type: "item.mouseenter",
                      itemId: index,
                    });
                  }}
                  onMouseLeave={() => {
                    send({
                      type: "item.mouseleave",
                    });
                  }}
                  onClick={() => {
                    send({
                      type: "item.click",
                      itemId: index,
                    });
                  }}
                >
                  {item}
                </li>
              ))
            )}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default TextInput;
/*
import React from "react";
import { createMachine, assign } from "xstate";
import styles from "./text-input.module.css";
import clsx from "clsx";

//const { send, cancel } = actions;

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

const InputField = ({
  onTextChange,
  customClass = "",
  customStyle = {},
  placeholder,
}) => {
  const [state, send] = useMachine(inputMachine);

  const handleChange = (event) => {
    send({
      type: "INPUT_CHANGE",
      data: { value: event.target.value },
    });
  };

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
*/
