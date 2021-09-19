import React, { useState, useEffect } from 'react';
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

const defaultState = {
  buttonFeedback: '',
  logoComp: {
    isChecked: false,
  },
  radios: {
    selectedId: 0,
  },
  mlTask: 'Learning',
  palette: null,
  isFetching: false
};


const Intro = () => {
  const [state, setState] = useState(defaultState);

  useEffect( () => {
    const {isFetching, palette} = state;
    if (!isFetching && !palette) {
      const newPalette = getColorPalettes(numberUtil.getRandomInt(0, 5));
      setState({...state, palette: newPalette})
    }
  })

  // handlers

  const handleClick = (event, label) => {
    event.preventDefault();
    const buttonFeedback = `${label} has been clicked!`;
    setState({ ...state, buttonFeedback });
  };

  const handleChange = e => {
    setState({ ...state, logoComp: { isChecked: !this.state.logoComp.isChecked } });
  };

  const handleRadioChange = e => {
    this.setState({
      radios: { ...state, selectedId: Number(event.target.dataset.value) },
    });
  };

  const {
    buttonFeedback,
    logoComp,
    radios: { selectedId },
    mlTask,
    palette,
  } = state;

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
};

export default Intro;
