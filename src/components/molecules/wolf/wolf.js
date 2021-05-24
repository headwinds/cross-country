import React, { Component } from 'react';
import { Image, Column, SubHeadline } from '../../';

const Wolf = ({ config: { url, text, a11y, hasBackground } }) => {
  return (
    <Column hasBackground={hasBackground}>
      <SubHeadline text={text} />
      <Image url={url} width="300" a11y={a11y} />
    </Column>
  );
};

export default Wolf;
