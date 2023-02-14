import * as React from 'react';
import { Row, Column, Paragraph, Span } from '../../';
import { KeyValuePairsProps } from './key-value-pairs.types';

import styles from './key-value-pairs.css';

const KeyValuePairs: React.FC<KeyValuePairsProps> = ({
  dataTestId = 'key-value-pairs',
  children,
  keyValues = [],
  keyStyle = {},
  valueStyle = {},
}) => {
  const list = keyValues.map((keyValue, index) => {
    const { id, key, value } = keyValues[index];

    return (
      <Row key={id} customStyle={{ alignItems: 'flex-end', justifyContent: 'space-between', padding: 0 }}>
        <Span customStyle={keyStyle}>{key}</Span>
        <Paragraph customStyle={{ ...valueStyle, padding: 0, margin: 0 }}>{value}</Paragraph>
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
