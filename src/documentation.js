import React, { Component } from "react";
import {
  Logo,
  Column,
  Checkbox,
  Button,
  Row,
  SubHeadline,
  Headline,
  Paragraph,
  Wolf
} from "./components";

import logo from "./components/atoms/logo/cross-country.svg"

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
              <li><Checkbox />Logo</li>
              <li><Checkbox />Button</li>
              <li><Checkbox />Text Headline</li>
              <li><Checkbox />Text SubHeadline</li>
              <li><Checkbox />Image</li>
              <li><Checkbox />Column</li>
              <li><Checkbox />Row</li>
              <li><Checkbox />Line</li>
              <li><Checkbox />List</li>
              <li><Checkbox />Item</li>
            </ul>
          </Column>
          <Column>
            <SubHeadline text="Logo" />
            <Paragraph text="a simple logo for cross country" />
            <Row>
              <Logo url={logo} a11y="cross country logo" />
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
              <Wolf config={{url:"https://i.pinimg.com/originals/c2/99/c8/c299c825b1d9adf653a03760880c2d81.jpg",
                            a11y: "wolf",
                            text:"Wolf"}}
              />
              <Wolf config={{url: "https://i.pinimg.com/originals/3d/26/3e/3d263efde96d082aa041c923a0fe8b08.png",
                            a11y: "princess",
                            text:"princess"}}
              />
            </Row>
          </Column>
        </Row>
      </Column>
    );
  }
}
