import React, { forwardRef } from 'react';
// components
import { Column, Row, Headline, Paragraph } from '../../../';
import { tree } from './tree-data';

const TwoPartTreeSum = () => {
  const recurse = node => {
    const sum = nums => nums.reduce((a, b) => a + b, 0);

    if (node.children && node.children.length > 0) {
      const val = node?.value ?? 0;
      return val + sum(node.children.map(recurse));
    } else if (node?.value) {
      return node.value;
    }
  };

  const sum = tree.reduce((acc, node) => {
    return acc + recurse(node);
  }, 0);

  return (
    <Column>
      <Headline>Two Part Tree Sum</Headline>
      <Row customStyle={{ alignItems: 'flex-end' }}>
        <Paragraph
          customStyle={{ fontSize: 28, fontWeight: 'bold', color: 'grey', padding: 0, marginRight: 8, marginBottom: 4 }}
        >
          Sum
        </Paragraph>
        <Paragraph
          customStyle={{
            fontSize: 48,
            fontWeight: 'bold',
            color: 'rebeccapurple',
            padding: 0,
            verticalAlign: 'bottom',
            margin: 0,
          }}
        >
          {sum}
        </Paragraph>
      </Row>
    </Column>
  );
};

export default TwoPartTreeSum;
