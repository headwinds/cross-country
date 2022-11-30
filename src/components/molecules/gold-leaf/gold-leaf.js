import React from 'react';
import { Image, Column, SubHeadline, Card } from '../../';

export const GoldLeaf = ({ config: { url, text, a11y, hasBackground } }) => {
  console.log('here....');
  return (
    <Card hasBackground={hasBackground}>
      <SubHeadline text={text} />
      <Image url={url} width="300" a11y={a11y} />
    </Card>
  );
};

export default GoldLeaf;
