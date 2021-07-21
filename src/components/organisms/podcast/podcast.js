import React, { Component } from 'react';
import { Image, Column, SubHeadline } from '../../';

const Podcast = ({ config: { text, hasBackground } }) => {
  return (
    <Column hasBackground={hasBackground}>
      <SubHeadline text={text} />
    </Column>
  );
};

export default Podcast;
