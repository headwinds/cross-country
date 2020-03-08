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

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(label){
    const buttonFeedback = `${label} has been clicked!`;
    this.setState({buttonFeedback})
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
            <Flex>
              <Button
                handleClick={this.handleClick}
                text="click me"
                label="green"
                customStyle={{ backgroundColor: "green", color: "white" }}
              />
              <Button
                text="click me"
                label="grey"
                handleClick={this.handleClick}
                customStyle={{ backgroundColor: "grey", color: "white" }}
              />
             </Flex>
            <Paragraph text={buttonFeedback} />
          </Block>
        </Flex>
      </Block>
    );
  }
}
