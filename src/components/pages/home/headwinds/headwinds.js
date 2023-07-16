import React, { useState, useEffect, useRef } from 'react';
import getIsMobile from '../../../../utils/mobile-detect';
import {
  Logo,
  Grid,
  Wallpaper,
  Column,
  Row,
  SubHeadline,
  Headline,
  Paragraph,
  Tile,
  ReverseTextAnimation,
  HeadwindsHomeTemplate,
} from '../../../';
import Header from './headwinds-header';
import Hero from './headwinds-hero';
import SideQuest from './headwinds-sidequest';
import Footer from './headwinds-footer';

//import useDeviceDetection from '../../../../../hooks/useDeviceDetection';
//import useTheme from '../../../../../hooks/useTheme';

// utils & hooks
import ColourUtil from '../../../../utils/colour-util';
// import numberUtil from '../../utils/number-util'; <-- use Class and needs a babel plugin

// styles
import styles from './headwinds.module.css';
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
  isFetching: false,
};

const HeadwindsHome = () => {
  const [state, setState] = useState(defaultState);
  const [mlTask, setTask] = useState('Learning');
  const staggerRowRef = useRef(null);
  const [palette, setPalette] = useState(null);

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
  } = state;

  // make sure this done from the client not the server!
  const isMobile = getIsMobile();
  const contextValue = isMobile ? 'mobile' : 'desktop';

  const device = isMobile ? 'Mobile' : 'Desktop';
  const hello = `By combining text and vector graphics, we can create posts, experiments and even worlds within a structure that will flow across devices.`;
  const responsive = `This system will detect the device. In this case, you're on a ${device}, and will respond accordingly providing pleasant UX for writing and reading technical articles as well as experimenting with javascript and svg.`;

  useEffect(() => {
    const { isFetching } = state;
    if (!isFetching && !palette) {
      const newPalette = ColourUtil.getColorPalettes(3);
      console.log('newPalette', newPalette);
      setPalette({ palette: newPalette });
    }
  }, [state, palette]);

  if (!palette) {
    return null;
  }

  const headlineColor = palette[0];
  const subHeadlineColor = headlineColor;
  const staggerColor = palette[1];

  console.log('Rendering headwinds home');

  return (
    <DeviceContext.Provider value={contextValue}>
      <Wallpaper backgroundColor="transparent">
        <HeadwindsHomeTemplate sidequest={<SideQuest />} hero={<Hero />} header={<Header />} footer={<Footer />} />
      </Wallpaper>
    </DeviceContext.Provider>
  );

  /*
  return (
    <DeviceContext.Provider value={contextValue}>
      <Wallpaper backgroundColor="white">
        <HeadwindsHomeTemplate isBlockedIn />

        <Column>
          <Headline color={headlineColor} customClass={styles.headline}>
            Cross Country
          </Headline>
          <SubHeadline color={subHeadlineColor} customClass={styles.subheadline}>
            Create Worlds with Tiles
          </SubHeadline>
        </Column>
        <div ref={staggerRowRef}>
          <Row>
            <FrozenLake />
          </Row>
        </div>
      </Wallpaper>
    </DeviceContext.Provider>
  );*/
};

export default HeadwindsHome;
