interface KeyValue {
  id: number;
  key: string;
  value: string;
}

export interface KeyValuePairsProps {
  dataTestId?: string;
  keyValues: KeyValue[];
  keyStyle?: any;
  valueStyle?: any;
}
