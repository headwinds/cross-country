// TODO type check
// @ts-nocheck
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
  isDraggable: boolean;
  rows?: number;
  cols?: number;
}

const TextInput = ({
  actorOptions,
  placeholder,
  customStyle,
  customClass,
  onDebouncedQueryChange = null,
  isDraggable = false,
  rows = null,
  cols = null,
  isContentEditable = false,
  ...rest
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

  if (isContentEditable) {
    const handleContentChange = (event) => {
      const { innerText } = event.target;
      send({
        type: "input.change",
        searchInput: innerText,
      });
    };

    // TODO support focus later...
    // https://www.perplexity.ai/search/blog-13SAPvEGSASP1WK.9dveMQ#2
    return (
      <div
        // ref={editorRef} do I want to set focus like this?!
        contentEditable
        suppressContentEditableWarning={true}
        onInput={handleContentChange}
        className={clsx(styles.textInput, customClass)}
      >
        {state.context.searchInput}
      </div>
    );
  }

  if (rows && cols) {
    return (
      <textarea
        {...rest}
        rows={rows}
        cols={cols}
        className={clsx(styles.textInput, customClass)}
        style={customStyle}
        placeholder={placeholder}
        draggable={isDraggable}
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
  }

  return (
    <input
      {...rest}
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
