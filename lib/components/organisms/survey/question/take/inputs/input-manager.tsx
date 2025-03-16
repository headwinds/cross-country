import DateTimePicker from "./date-time-input";
import { TextInput, MultipleChoice, Paragraph } from "@/lib/components";
import type { MultipleChoiceData } from "../multiple-choice";

interface InputManagerProps {
  data: unknown;
  variant: "date-time" | "text" | "multiple-choice";
  onChange?: (data: any) => void;
  placeholder?: string;
  customClass?: string;
  customStyle?: {};
  saveAnswer?: any;
  defaultValue?: any;
  question?: string;
}
const InputManager = ({
  data,
  variant,
  onChange,
  placeholder,
  customClass,
  customStyle,
  saveAnswer,
  defaultValue,
  question,
}: InputManagerProps) => {
  if (variant === "text") {
    return (
      <>
        <Paragraph customClass="m-2">{question}</Paragraph>
        <TextInput
          placeholder={"Enter the answer"}
          customClass={customClass}
          customStyle={{ width: "95%" }}
          defaultValue={saveAnswer}
          onTextChange={(text) => onChange({ text })}
        />
      </>
    );
  }

  if (variant === "multiple-choice") {
    return (
      <MultipleChoice
        data={data as MultipleChoiceData}
        onChange={(selectedId) => onChange({ selectedId })}
        selectedId={saveAnswer}
      />
    );
  }

  return <DateTimePicker onChange={onChange} />;
};

export default InputManager;
