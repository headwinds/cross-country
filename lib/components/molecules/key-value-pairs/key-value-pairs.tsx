import * as React from 'react';
import { Row, Column, Paragraph, Span, AnimateNumber } from '../../';
import { KeyValuePairsProps } from './key-value-pairs.types';

import styles from './key-value-pairs.css';

export const VALUE_TYPE = {
  TEXT: 'text',
  ANIMATE_NUMBER: 'animate-number',
};

const KeyValuePairs: React.FC<KeyValuePairsProps> = ({
  dataTestId = 'key-value-pairs',
  keyValues = [],
  keyStyle = {},
  valueStyle = {},
}) => {
  const list = keyValues.map((keyValue, index) => {
    const { id, key, value, type } = keyValues[index];

    const renderValueByType = () => {
      switch (type) {
        case VALUE_TYPE.ANIMATE_NUMBER:
          return <AnimateNumber from={0} to={value} />;
        case VALUE_TYPE.TEXT:
        default:
          return <Paragraph customStyle={{ ...valueStyle, padding: 0, margin: 0 }}>{value}</Paragraph>;
      }
    };

    return (
      <Row key={id} customStyle={{ alignItems: 'flex-end', justifyContent: 'space-between', padding: 0 }}>
        <Span customStyle={keyStyle}>{key}</Span>
        {renderValueByType()}
      </Row>
    );
  });

  return (
    <Column dataTestId={dataTestId} customStyle={{ width: '100%', margin: 8 }}>
      {list}
    </Column>
  );
};

export default KeyValuePairs;
