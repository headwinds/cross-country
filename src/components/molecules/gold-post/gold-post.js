import React from 'react';
import { Image, Column, SubHeadline } from '../../';

/*
export const GoldPost = ({ config: { url, text, a11y, hasBackground } }) => {
  console.log('here....');
  return (
    <Column hasBackground={hasBackground}>
      <SubHeadline text={text} />
      <Image url={url} width="300" a11y={a11y} />
      <p>card here...</p>
    </Column>
  );
};

export default GoldPost;
*/

export const GoldPost = () => {
  const hasBackground = false;
  return (
    <Column hasBackground={hasBackground}>
      <p>why now</p>
    </Column>
  );
};

export default GoldPost;
