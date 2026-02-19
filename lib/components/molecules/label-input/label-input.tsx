import React from "react";
import Label from "../../atoms/text/label";
import TextInput from "../../atoms/text/input";
import TextArea from "../../atoms/text/text-area";
import List from "../../atoms/list";
import ListItem from "../../atoms/list/list-item";
import styles from "./label-input.module.css";

export interface LabelInputPair {
  id: string;
  label: string;
  value: string;
  placeholder?: string;
  type?: string;
  inputType?: "input" | "textarea";
}

export interface LabelInputProps {
  pairs: LabelInputPair[];
  onChange: (pairs: LabelInputPair[]) => void;
  isVertical?: boolean;
}

const DEFAULT_PAIR: LabelInputPair = {
  id: "default",
  label: "Label",
  value: "",
  placeholder: "Enter text",
  inputType: "input",
};

const onTextChange = (onChange: (pairs: LabelInputPair[]) => void, pairs: LabelInputPair[], id: string, value: string) => {
  onChange(pairs.map((p) => p.id === id ? { ...p, value } : p));
};



const LabelInput = ({
  pairs = [DEFAULT_PAIR],
  onChange,
  isVertical = false,
}: LabelInputProps) => {
  return (
    <List customClass={styles.labelInputList}>
      {pairs.map((pair) => {
        const isTextArea = pair.inputType === "textarea";
        const itemClass = [
          styles.labelInputItem,
          isTextArea && styles.labelInputItemTextArea,
          isVertical && styles.labelInputItemVertical
        ].filter(Boolean).join(" ");
        
        const labelStyle = isVertical 
          ? { marginRight: "0px", marginBottom: "0px", marginLeft: "-1px", textAlign: "left" as const }
          : { marginRight: "0px" };
        
        return (
          <ListItem key={pair.id} customClass={itemClass}>
            <Label forId={pair.id} customClass={styles.label} customStyle={labelStyle}>
              {pair.label}
            </Label>
            {isTextArea ? (
              <TextArea
                id={pair.id}
                value={pair.value}
                placeholder={pair.placeholder}
                onTextChange={(text) => onTextChange(onChange, pairs, pair.id, text)}
              />
            ) : (
              <TextInput
                id={pair.id}
                value={pair.value}
                placeholder={pair.placeholder}
                type={pair.type}
                onTextChange={(text) => onTextChange(onChange, pairs, pair.id, text)}
              />
            )}
          </ListItem>
        );
      })}
    </List>
  );
};

export default LabelInput;
