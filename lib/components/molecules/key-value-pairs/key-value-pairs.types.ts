export const VALUE_TYPE = {
  TEXT: "text",
  ANIMATE_NUMBER: "animate-number",
  INPUT_TEXT: "input-text",
};

export type KeyValue = {
  id: number;
  key: string;
  value: string;
  type?: keyof typeof VALUE_TYPE;
  onChange?: (id: number, newValue: string) => void; // Optional callback for input text changes
  defaultValue?: string; // Optional default value for input text
};

export interface KeyValuePairsProps {
  dataTestId?: string;
  keyValues: KeyValue[];
  keyStyle?: any;
  valueStyle?: any;
}
