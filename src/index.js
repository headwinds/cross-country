import React, { Component } from 'react'
import Documentation from "./documentation";
import ReadMe from "./readme";
import {
  Column,
  SubHeadline
} from "./components";

export * from './components';

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
