import * as React from 'react';
import { Span, Paragraph } from '../../../';
import KeyValuePairs from '../key-value-pairs';

const KeyValuePairsStory = () => {
  const keyStyle = { color: 'grey', fontSize: 12 };
  const valueStyle = { color: 'black', fontSize: 16, fontWeight: 'bold' };
  const keyValues = [
    { id: 0, key: 'name', value: 'Matthew Pocock' },
    { id: 1, key: 'profession', value: 'Typescript Wizard' },
  ];
  return <KeyValuePairs keyStyle={keyStyle} valueStyle={valueStyle} keyValues={keyValues} />;
};

export default KeyValuePairsStory;
