import React from "react";
import Label from "../../atoms/text/label";
import TextInput from "../../atoms/text/input";
import List from "../../atoms/list";
import ListItem from "../../atoms/list/list-item";
import styles from "./label-input.module.css";

export interface LabelInputPair {
  id: string;
  label: string;
  value: string;
  placeholder?: string;
  type?: string;
}

export interface LabelInputProps {
  pairs: LabelInputPair[];
  onChange: (pairs: LabelInputPair[]) => void;
}

const DEFAULT_PAIR: LabelInputPair = {
  id: "default",
  label: "Label",
  value: "",
  placeholder: "Enter text",
};

const onTextChange = (onChange: (pairs: LabelInputPair[]) => void, pairs: LabelInputPair[], id: string, value: string) => {
  onChange(pairs.map((p) => p.id === id ? { ...p, value } : p));
};



const LabelInput = ({
  pairs = [DEFAULT_PAIR],
  onChange,
}: LabelInputProps) => {
  return (
    <List customClass={styles.labelInputList}>
      {pairs.map((pair) => (
        <ListItem key={pair.id} customClass={styles.labelInputItem}>
          <Label forId={pair.id} customClass={styles.label} customStyle={{marginRight: "0px"}}>
            {pair.label}
          </Label>
          <TextInput
            id={pair.id}
            value={pair.value}
            placeholder={pair.placeholder}
            type={pair.type}
            onTextChange={(text) => onTextChange(onChange, pairs, pair.id, text)}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default LabelInput;
