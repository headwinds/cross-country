export const VALUE_TYPE = {
  TEXT: "text",
  ANIMATE_NUMBER: "animate-number",
  INPUT_TEXT: "input-text",
};

export const KEY_VALUE_EVENTS = {
  PAIRS_CHANGE: "PAIRS_CHANGE",
}

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
  onChange?: (type: string, payload: {id: number, newValue: string, newPairs: KeyValue[]} ) => void;
}
