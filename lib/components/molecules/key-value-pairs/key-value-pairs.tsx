import * as React from "react";
import { AnimateNumber, Column, Paragraph, Row, Span } from "../../";
import {
  type KeyValuePairsProps,
  type KeyValue,
  VALUE_TYPE,
} from "./key-value-pairs.types";
import KeyValuePair from "./key-value-pair";

const KeyValuePairs = ({
  dataTestId = "key-value-pairs",
  keyValues = [], // defaults to an empty array
  keyStyle = { fontSize: 12, color: "grey", fontFamily: "Helvetica" },
  valueStyle = { fontSize: 14, color: "black", fontFamily: "Helvetica" },
}: KeyValuePairsProps) => {
  const list = keyValues.map((keyValue, index) => {
    const { id, key, value, type } = keyValues[index];

    return (
      <KeyValuePair
        key={id}
        data={keyValue}
        keyStyle={keyStyle}
        valueStyle={valueStyle}
      />
    );
  });

  return (
    <Column dataTestId={dataTestId} customStyle={{ width: "100%", margin: 8 }}>
      {list}
    </Column>
  );
};

export default KeyValuePairs;
