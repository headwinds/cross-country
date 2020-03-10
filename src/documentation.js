import React, { Component } from "react";
import {
  Logo,
  Column,
  Button,
  Row,
  SubHeadline,
  Headline,
  Paragraph,
  Wolf
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

  handleClick(label) {
    const buttonFeedback = `${label} has been clicked!`;
    this.setState({ buttonFeedback });
  }

  render() {
    const { buttonFeedback } = this.state;

    return (
      <Column hasBackground={false}>
        <Headline text="Cross-Country Design System" />
        <SubHeadline text="Atoms" />

        <Row>
          <Column>
            <ul>
              <li>Logo</li>
              <li>Button</li>
              <li>Text Headline</li>
              <li>Text SubHeadline</li>
              <li>Image</li>
              <li>Column</li>
              <li>Row</li>
              <li>Line</li>
              <li>List</li>
              <li>Item</li>
            </ul>
          </Column>
          <Column>
            <SubHeadline text="Logo" />
            <Paragraph text="a simple logo for cross country" />
            <Row>
              <Logo />
            </Row>
          </Column>
          <Column>
            <SubHeadline text="Button" />
            <Paragraph text="a simple button that be can used for interaction" />
            <Row>
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
            </Row>
            <Paragraph text={buttonFeedback} />
          </Column>
        </Row>
        <SubHeadline text="Molecules" />
        <Row>
          <Column>
            <SubHeadline text="Text with Image" />
            <Row>
              <Wolf
                url={
                  "https://i.pinimg.com/originals/c2/99/c8/c299c825b1d9adf653a03760880c2d81.jpg"
                }
                text="Wolf"
              />
              <Wolf
                url={
                  "https://i.pinimg.com/originals/3d/26/3e/3d263efde96d082aa041c923a0fe8b08.png"
                }
                text="Princess"
              />
            </Row>
          </Column>
        </Row>
      </Column>
    );
  }
}
