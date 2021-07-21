import React, { Component } from 'react';
import getIsMobile from '../../utils/mobile-detect';
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
  Brand,
} from '../../components';
import useDeviceDetection from '../../hooks/useDeviceDetection/';
import useTheme from '../../hooks/useTheme/';

import logo from '../../components/atoms/logo/cross-country.svg';

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

  handleClick(event, label) {
    event.preventDefault();
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
    const hello = `By combining text and vector graphics, we can create posts, experiments and even worlds within a structure that will flow across devices.`;
    const responsive = `This system will detect the device. In this case, you're on a ${device}, and will respond accordingly providing pleasant UX for writing and reading technical articles as well as experimenting with javascript and svg.`;

    const subHeadlineStyle = { position: 'absolute', top: 60, left: 90, color: '#386775' };

    return (
      <DeviceContext.Provider value={contextValue}>
        <Grid>
          <Column>
            <Brand />
            <Paragraph>{hello}</Paragraph>
            <Paragraph>{responsive}</Paragraph>
            <Column>
              <Login
                config={{
                  url: 'https://i.pinimg.com/originals/c2/99/c8/c299c825b1d9adf653a03760880c2d81.jpg',
                  a11y: 'wolf',
                  text: 'Wolf',
                  route: '/login',
                }}
              />
            </Column>
          </Column>
        </Grid>
      </DeviceContext.Provider>
    );
  }
}
