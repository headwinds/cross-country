import * as React from 'react';
import { Row, Column, Paragraph, Span } from '../../';
import { SpanRowProps } from './span-row.types';

import styles from './span-row.scss';

const SpanRow: React.FC<SpanRowProps> = ({ children, keyValues = [], keyStyle = {}, valueStyle = {} }) => {
  const list = keyValues.map((keyValue, index) => {
    const { key, value } = keyValues[index];

    return (
      <Row customStyle={{ alignItems: 'flex-end', justifyContent: 'space-between', padding: 0 }}>
        <Span customStyle={keyStyle}>{key}</Span>
        <Paragraph customStyle={{ ...valueStyle, padding: 0, margin: 0 }}>{value}</Paragraph>
      </Row>
    );
  });

  return <Column customStyle={{ width: '100%', margin: 8 }}>{list}</Column>;
};

export default SpanRow;
