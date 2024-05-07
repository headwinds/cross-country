import DateTimePicker from "./date-time-input";
import { TextInput } from "../../../../../";

interface InputManagerProps {
  variant: "date-time" | "text";
  onChange?: (data: any) => void;
  placeholder?: string;
  customClass?: string;
  customStyle?: {};
  saveAnswer?: any;
}
const InputManager = ({
  variant,
  onChange,
  placeholder,
  customClass,
  customStyle,
  saveAnswer,
}: InputManagerProps) => {
  if (variant === "text") {
    return (
      <TextInput
        placeholder={"Enter the answer"}
        customClass={customClass}
        customStyle={{ width: "95%" }}
        defaultValue={saveAnswer}
        onTextChange={(text) => onChange({ text })}
      />
    );
  }

  return <DateTimePicker onChange={onChange} />;
};

export default InputManager;
