import React, { Component } from 'react';
import getIsMobile from './utils/mobile-detect';
import {
  Logo,
  Grid,
  Link,
  Column,
  CheckboxLabel,
  RadioGroup,
  Button,
  Row,
  SubHeadline,
  Headline,
  Paragraph,
  List,
  ListItem,
  Wolf,
  Login,
} from './components';
import useDeviceDetection from './hooks/useDeviceDetection/';
import useTheme from './hooks/useTheme/';

import logo from './components/atoms/logo/cross-country.svg';

const nationalparks = [
  { id: 0, name: 'Alqonquin' },
  { id: 1, name: 'Jasper' },
  { id: 2, name: 'Elk Island' },
  { id: 3, name: 'Rouge' },
];

const DeviceContext = React.createContext('device');

export default class Documentation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonFeedback: '',
      logoComp: {
        isChecked: false,
      },
      radios: {
        selectedId: 0,
      },
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
  }

  handleClick(label) {
    const buttonFeedback = `${label} has been clicked!`;
    this.setState({ buttonFeedback });
  }

  handleChange(e) {
    this.setState({ logoComp: { isChecked: !this.state.logoComp.isChecked } });
  }

  handleRadioChange(e) {
    this.setState({
      radios: { selectedId: Number(event.target.dataset.value) },
    });
  }

  render() {
    const {
      buttonFeedback,
      logoComp,
      radios: { selectedId },
    } = this.state;

    // make sure this done from the client not the server!
    const isMobile = getIsMobile();
    const contextValue = isMobile ? 'mobile' : 'desktop';

    const device = isMobile ? 'Mobile' : 'Desktop';
    const hello = `This system will detect the device: ${device} and will respond accordingly providing pleasant UX for writing and reading technical articles as well as experimenting with javascript and svg.`;

    return (
      <DeviceContext.Provider value={contextValue}>
        <Grid>
          <Column>
            <Headline text="Cross-Country" />
            <SubHeadline text="Design System" />
            <Paragraph>{hello}</Paragraph>
            <Column>
              <Login
                config={{
                  url: 'https://i.pinimg.com/originals/c2/99/c8/c299c825b1d9adf653a03760880c2d81.jpg',
                  a11y: 'wolf',
                  text: 'Wolf',
                }}
              />
            </Column>

            <Column>
              <SubHeadline text="Atoms" />
              <Column>
                <List>
                  <ListItem>
                    <CheckboxLabel
                      config={{
                        text: 'Logo',
                        id: 'logo',
                        isChecked: logoComp.isChecked,
                        handleChange: this.handleChange,
                      }}
                    />
                  </ListItem>
                  <ListItem>
                    <CheckboxLabel config={{ text: 'Button', id: 'button' }} />
                  </ListItem>
                  <ListItem>
                    <CheckboxLabel config={{ text: 'Headline', id: 'headline' }} />
                  </ListItem>
                  <ListItem>
                    <CheckboxLabel config={{ text: 'SubHeadline', id: 'subheadline' }} />
                  </ListItem>
                  <ListItem>
                    <CheckboxLabel config={{ text: 'Image', id: 'image' }} />
                  </ListItem>
                  <ListItem>
                    <CheckboxLabel config={{ text: 'Column', id: 'column' }} />
                  </ListItem>
                  <ListItem>
                    <CheckboxLabel config={{ text: 'Row', id: 'row' }} />
                  </ListItem>
                  <ListItem>
                    <CheckboxLabel config={{ text: 'Line', id: 'line' }} />
                  </ListItem>
                  <ListItem>
                    <CheckboxLabel config={{ text: 'List', id: 'list' }} />
                  </ListItem>
                  <ListItem>
                    <CheckboxLabel config={{ text: 'Item', id: 'item' }} />
                  </ListItem>
                </List>
              </Column>
              <Column hasChildrenCentered={false}>
                <SubHeadline text="Link" />
                <Paragraph text="a hyper link that wraps the anchor element" />
                <Link
                  text="Editorial Design Patterns With CSS Grid And Named Columns"
                  url="https://www.smashingmagazine.com/2019/10/editorial-design-patterns-css-grid-subgrid-naming/"
                >
                  Editorial Design Patterns With CSS Grid And Named Columns
                </Link>
              </Column>
              <Column>
                <SubHeadline text="Radio Button" />
                <Paragraph text="a radio button for cross country" />
                <RadioGroup list={nationalparks} handleChange={this.handleRadioChange} selectedId={selectedId} />
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
                    customStyle={{ backgroundColor: 'green', color: 'white' }}
                  />
                  <Button
                    text="click me"
                    label="grey"
                    handleClick={this.handleClick}
                    customStyle={{ backgroundColor: 'blue', color: 'white' }}
                  />
                </Row>
                <Paragraph text={buttonFeedback} />
              </Column>
            </Column>
            <SubHeadline text="Molecules" />
            <Row>
              <Column>
                <SubHeadline text="Text with Image" />
                <Row>
                  <Wolf
                    config={{
                      url: 'https://i.pinimg.com/originals/c2/99/c8/c299c825b1d9adf653a03760880c2d81.jpg',
                      a11y: 'wolf',
                      text: 'Wolf',
                    }}
                  />
                  <Wolf
                    config={{
                      url: 'https://i.pinimg.com/originals/3d/26/3e/3d263efde96d082aa041c923a0fe8b08.png',
                      a11y: 'princess',
                      text: 'princess',
                    }}
                  />
                </Row>
              </Column>
            </Row>
          </Column>
        </Grid>
      </DeviceContext.Provider>
    );
  }
}
