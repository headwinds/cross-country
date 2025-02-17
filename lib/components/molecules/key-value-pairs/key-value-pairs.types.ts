export const VALUE_TYPE = {
  TEXT: "text",
  ANIMATE_NUMBER: "animate-number",
};

export type KeyValue = {
  id: number;
  key: string;
  value: string;
  type?: keyof typeof VALUE_TYPE;
};

export interface KeyValuePairsProps {
  dataTestId?: string;
  keyValues: KeyValue[];
  keyStyle?: any;
  valueStyle?: any;
}
