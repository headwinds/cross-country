import * as React from "react";
import { useEffect, useState } from "react";
import { AnimateNumber, Column, Paragraph, Row, Span } from "../../";
import {
  type KeyValuePairsProps,
  type KeyValue,
  VALUE_TYPE,
} from "./key-value-pairs.types";
import KeyValuePair from "./key-value-pair";
import { KEY_VALUE_EVENTS } from "./key-value-pairs.types";


const KeyValuePairs = ({
  dataTestId = "key-value-pairs",
  keyValues = [], // defaults to an empty array
  keyStyle = { fontSize: 12, color: "grey", fontFamily: "Helvetica" },
  valueStyle = { fontSize: 14, color: "black", fontFamily: "Helvetica" },
  onChange, // optional onChange handler for input text changes
}: KeyValuePairsProps) => {

    const [pairs, setPairs] = React.useState<KeyValue[]>([]);
      
    const onInputTextChange = (id: number, newValue: string) => {
      setPairs(prevPairs => {
        const newPairs = prevPairs.map((pair) =>
          pair.id === id ? { ...pair, value: newValue } : pair
        );

        if (onChange) {
          onChange(KEY_VALUE_EVENTS.PAIRS_CHANGE, {id, newValue, newPairs});
        }

        return newPairs;
      });
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




  const firstInputIndex = pairs.findIndex(pair => pair.type === VALUE_TYPE.INPUT_TEXT);

  const list = pairs.map((keyValue, index) => {
    const { id, key, value, type } = pairs[index];

    return (
      <KeyValuePair
        key={id}
        data={keyValue}
        keyStyle={keyStyle}
        valueStyle={valueStyle}
        autoFocus={index === firstInputIndex && firstInputIndex !== -1}
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
