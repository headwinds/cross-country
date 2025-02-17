//@ts-nocheck

import * as React from "react";
import { AnimateNumber, Column, Paragraph, Row, Span } from "../../";
import {
  type KeyValuePairsProps,
  type KeyValue,
  VALUE_TYPE,
} from "./key-value-pairs.types";

const KeyValuePairs = ({
  dataTestId = "key-value-pairs",
  keyValues = [], // defaults to an empty array
  keyStyle = {},
  valueStyle = {},
}: KeyValuePairsProps) => {
  const list = keyValues.map((keyValue, index) => {
    const { id, key, value, type } = keyValues[index];

    const renderValueByType = () => {
      switch (type) {
        case VALUE_TYPE.ANIMATE_NUMBER:
          return <AnimateNumber from={0} to={value} />;
        case VALUE_TYPE.TEXT:
        default:
          return (
            <Paragraph customStyle={{ ...valueStyle, padding: 0, margin: 0 }}>
              {value}
            </Paragraph>
          );
      }
    };

    return (
      <Row
        key={id}
        customStyle={{
          alignItems: "flex-end",
          justifyContent: "space-between",
          padding: 0,
        }}
      >
        <Span customStyle={keyStyle}>{key}</Span>
        {renderValueByType()}
      </Row>
    );
  });

  return (
    <Column dataTestId={dataTestId} customStyle={{ width: "100%", margin: 8 }}>
      {list}
    </Column>
  );
};

export default KeyValuePairs;
