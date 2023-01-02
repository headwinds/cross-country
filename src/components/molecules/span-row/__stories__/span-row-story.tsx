import * as React from 'react';
import { Span, Paragraph } from '../../../';
import SpanRow from '../span-row';

const SpanRowStory = () => {
  const keyStyle = { color: 'grey', fontSize: 12 };
  const valueStyle = { color: 'black', fontSize: 16, fontWeight: 'bold' };
  const keyValues = [
    { key: 'name', value: 'Sir Clive Sinclair' },
    { key: 'profession', value: 'Computer Wizard' },
  ];
  return <SpanRow keyStyle={keyStyle} valueStyle={valueStyle} keyValues={keyValues} />;
};

export default SpanRowStory;
