import * as React from "react";
import { useEffect, useState } from "react";
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
  onChange, // optional onChange handler for input text changes
}: KeyValuePairsProps) => {

    const [pairs, setPairs] = React.useState<KeyValue[]>([]);
      
    const onInputTextChange = (id: number, newValue: string) => {
      setPairs((prevPairs) =>
        prevPairs.map((pair) =>
          pair.id === id ? { ...pair, value: newValue } : pair
        )
      );
      if (onChange) {
        onChange(id, newValue);
      }
    };

    useEffect(() => {

      // if keyValues have onChange handlers, we need to override them to ensure the state updates correctly
      const updatedKeyValues = keyValues.map(kv => {
        if (kv.type === VALUE_TYPE.INPUT_TEXT) {
          return {
            ...kv,
            onChange: onInputTextChange,
          }
        }
        return kv;
      });

      setPairs(updatedKeyValues);

    }, []);




  const list = pairs.map((keyValue, index) => {
    const { id, key, value, type } = pairs[index];

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
