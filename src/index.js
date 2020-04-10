import React, { Component } from 'react'
import Documentation from "./documentation";
import ReadMe from "./readme";

import {
  Column,
  SubHeadline,
  Paragraph
} from "./components";

export * from './components';
export * from './utils';

export default class CrossCountry extends Component {

  render() {
    return (
      <Column hasBackground={false}>
        <Documentation name="documentation" />
        <SubHeadline text="Read Me" size="large" />
        <ReadMe />
      </Column>
    )
  }
}
