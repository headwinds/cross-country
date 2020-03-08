import React, { Component } from "react";
import {
  Block,
  Button,
  Flex,
  SubHeadline,
  Headline,
  Paragraph
} from "./components";

export * from "./components";

export default class Documentation extends Component {

  constructor(props) {
    super(props);

    this.state = {
      buttonFeedback: ""
    };
  }

  render() {
    const { buttonFeedback } = this.state;
    return (
      <Block isSolid={false}>
        <Headline text="Cross-Country Design System" />
        <Flex>
          <Block>
            <SubHeadline text="Button" />
            <Paragraph text="a simple button that can used for interaction" />
            <Button
              text="click me"
              customStyle={{ backgroundColor: "green", color: "white" }}
            />
            <Paragraph text={buttonFeedback} />
          </Block>
        </Flex>
      </Block>
    );
  }
}
