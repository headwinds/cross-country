import * as React from "react";
import { AnimateNumber, Paragraph, Row, Span } from "../../";
import { type KeyValue, VALUE_TYPE } from "./key-value-pairs.types";
import { SpringValue } from "@react-spring/web";

interface KeyValuePairProps {
  data: KeyValue;
  keyStyle?: React.CSSProperties;
  valueStyle?: React.CSSProperties;
}

const KeyValuePair = ({
  data,
  keyStyle = { fontSize: 12, color: "grey", fontFamily: "Helvetica" },
  valueStyle = { fontSize: 14, color: "black", fontFamily: "Helvetica" },
}: KeyValuePairProps) => {
  const { id, key, value, type } = data;

  const num = Number(value);

  const renderValueByType = () => {
    switch (type) {
      case VALUE_TYPE.ANIMATE_NUMBER:
        return (
          <AnimateNumber from={0} to={num as unknown as SpringValue<number>} />
        );
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
        padding: 4,
        borderBottom: "1px solid #ddd",
        marginBottom: 4,
      }}
    >
      <Span customStyle={keyStyle}>{key}</Span>
      {renderValueByType()}
    </Row>
  );
};

export default KeyValuePair;
