import { useActor } from "@xstate/react";
import { inputTextMachine } from "./input-text-machine";
import type { ActorOptions, AnyActorLogic } from "xstate";
import styles from "./text-input.module.css";
import clsx from "clsx";

interface TextInputProps {
  actorOptions: ActorOptions<AnyActorLogic> | undefined;
  placeholder: string;
  customStyle?: React.CSSProperties;
  customClass?: string;
}

const TextInput = ({
  actorOptions,
  placeholder,
  customStyle,
  customClass,
}: TextInputProps) => {
  const [state, send] = useActor(inputTextMachine, actorOptions);

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
