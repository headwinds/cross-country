import React, { Component } from "react";
import Documentation from "./documentation";
import World from "./world";
import ReadMe from "./readme";

import { Column, SubHeadline, Paragraph } from "./components";

export * from "./components";
export * from "./utils";

const selected = "world";
function renderChoose(selected) {
  switch (selected) {
    case "world":
      return <World />;
    case "documentation":
      return (
        <section>
          <Documentation name="documentation" />
          <SubHeadline text="Read Me" size="large" />
          <ReadMe />
        </section>
      );
  }
}

export default class CrossCountry extends Component {
  render() {
    return <Column hasBackground={false}>{renderChoose(selected)}</Column>;
  }
}
