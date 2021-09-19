import React, { Component } from 'react';
import getIsMobile from '../../utils/mobile-detect';
import { Logo, Grid, Wallpaper, Column, Row, SubHeadline, Headline, Paragraph, Tile, Stagger } from '../../components';
import FrozenLake from '../../micro/games/frozen-lake';
import useDeviceDetection from '../../hooks/useDeviceDetection/';
import useTheme from '../../hooks/useTheme/';
import { getColorPalettes } from '../../utils/color-util';
import numberUtil from '../../utils/number-util';
import styles from './intro.scss';
import clsx from 'clsx';

const DeviceContext = React.createContext('device');

export default class Intro extends Component {
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
      mlTask: 'Learning',
      palette: null,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.animateMachineText = this.animateMachineText.bind(this);
  }

  componentDidMount() {
    this.animateMachineText();

    const ranIdx = Math.rand;

    const palette = getColorPalettes(numberUtil.getRandomInt(0, 5));
    console.log(palette)
    this.setState({ palette });
  }

  // handlers

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

  //
  animateMachineText() {
    const { mlTask } = this.state;
    const startTask = 'Learning';
    const endTask = 'Teaching';
    const len = startTask.length - 1;
    const cursor = '_';
    let newMLTask = startTask;
    let mlTaskIndex = len;

    const characterMilliseconds = 100;

    setTimeout(() => {
      let mlTextAnimateInterval = setInterval(() => {
        if (newMLTask.includes('Le')) {
          newMLTask = ` ${startTask.substr(0, mlTaskIndex)}${cursor}`;

          mlTaskIndex--;
          return this.setState({ mlTask: newMLTask });
        } else {
          newMLTask = ` ${endTask.substr(0, mlTaskIndex)}${cursor}`;
          mlTaskIndex++;

          if (mlTaskIndex > endTask.length) {
            clearInterval(mlTextAnimateInterval);
            return this.setState({ mlTask: endTask });
          }

          return this.setState({ mlTask: newMLTask });
        }
      }, characterMilliseconds);
    }, 5000);
  }

  render() {
    const {
      buttonFeedback,
      logoComp,
      radios: { selectedId },
      mlTask,
      palette,
    } = this.state;

    // make sure this done from the client not the server!
    const isMobile = getIsMobile();
    const contextValue = isMobile ? 'mobile' : 'desktop';

    const device = isMobile ? 'Mobile' : 'Desktop';
    const hello = `By combining text and vector graphics, we can create posts, experiments and even worlds within a structure that will flow across devices.`;
    const responsive = `This system will detect the device. In this case, you're on a ${device}, and will respond accordingly providing pleasant UX for writing and reading technical articles as well as experimenting with javascript and svg.`;

    if (!palette) {
      return null;
    }

    const headlineColor = palette[0];
    const subHeadlineColor = palette[1];
    const staggerColor = palette[2];

    return (
      <DeviceContext.Provider value={contextValue}>
        <Wallpaper backgroundColor="white">
          <Column>
            <Headline color={headlineColor} customClass={styles.headline}>
              Cross Country
            </Headline>
            <SubHeadline color={subHeadlineColor} customClass={styles.subheadline}>
              Create Worlds with Tiles
            </SubHeadline>
          </Column>
          <Row>
            <Stagger color={staggerColor} staggerText={['Learn React, D3, XState', `& Machine ${mlTask}`]} />
            <FrozenLake />
          </Row>
        </Wallpaper>
      </DeviceContext.Provider>
    );
  }
}
