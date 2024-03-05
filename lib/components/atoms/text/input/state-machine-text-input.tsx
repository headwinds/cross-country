import { useEffect, useState, useMemo } from "react";
import { useActor, useMachine } from "@xstate/react";
import { inputTextMachine } from "./input-text-machine";
import type { ActorOptions, AnyActorLogic, raise } from "xstate";
import styles from "./text-input.module.css";
import clsx from "clsx";

interface TextInputProps {
  actorOptions: ActorOptions<AnyActorLogic> | undefined;
  placeholder: string;
  customStyle?: React.CSSProperties;
  customClass?: string;
  onDebouncedQueryChange: (query: string) => void;
}

const TextInput = ({
  actorOptions,
  placeholder,
  customStyle,
  customClass,
  onDebouncedQueryChange = null,
}: TextInputProps) => {
  const [state, send, actor] = useActor(inputTextMachine, actorOptions);

  const subscription = useMemo(() => {
    return actor.subscribe((state) => {
      // This function is called whenever the state changes
      //console.log("Parent subscription New state:", state.value);
      if (state.context.debouncedSearchInput === "get dragons") {
        // console.log("Parent subscription heard get dragons");
      }
      const query = state.context.debouncedSearchInput;
      if (onDebouncedQueryChange) {
        onDebouncedQueryChange(query);
      }
    });
  }, []);

  return (
    <input
      type="text"
      className={clsx(styles.textInput, customClass)}
      style={customStyle}
      placeholder={placeholder}
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
  );
};

export default TextInput;
