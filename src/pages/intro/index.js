import React, { useState, useEffect, useRef } from 'react';
import getIsMobile from '../../utils/mobile-detect';
import { Logo, Grid, Wallpaper, Column, Row, SubHeadline, Headline, Paragraph, Tile } from '../../components';
import ReverseTextAnimation from '../../components/organisms/animation/reverse-text-animation';
import FrozenLake from '../../micro/games/frozen-lake';
import useDeviceDetection from '../../hooks/useDeviceDetection/';
import useTheme from '../../hooks/useTheme/';
//import useInterval from '../../hooks/useInterval';

// utils & hooks
import { getColorPalettes } from '../../utils/color-util';
// import numberUtil from '../../utils/number-util'; <-- use Class and needs a babel plugin

// styles
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
  palette: null,
  isFetching: false,
};

const Intro = () => {
  const [state, setState] = useState(defaultState);
  const [mlTask, setTask] = useState('Learning');
  const staggerRowRef = useRef(null);

  // text animation
  const startTask = 'Learning';
  const endTask = 'Teaching';
  const len = startTask.length - 1;
  const cursor = '_';

  let newMLTask = startTask;
  let mlTaskIndex = len;
  let animationInterval = null;
  let mlTextAnimateInterval = null;

  const animation = () => {
    const fromParts = startTask.substr(0, 2);
    if (newMLTask.includes(fromParts)) {
      newMLTask = ` ${startTask.substr(0, mlTaskIndex)}${cursor}`;

      mlTaskIndex--;
      return setTask(newMLTask);
    } else {
      newMLTask = ` ${endTask.substr(0, mlTaskIndex)}${cursor}`;
      mlTaskIndex++;

      if (mlTaskIndex > endTask.length) {
        clearInterval(mlTextAnimateInterval);
        setTask(endTask);
      }

      return setTask(newMLTask);
    }
  };

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
    palette,
  } = state;

  // make sure this done from the client not the server!
  const isMobile = getIsMobile();
  const contextValue = isMobile ? 'mobile' : 'desktop';

  const device = isMobile ? 'Mobile' : 'Desktop';
  const hello = `By combining text and vector graphics, we can create posts, experiments and even worlds within a structure that will flow across devices.`;
  const responsive = `This system will detect the device. In this case, you're on a ${device}, and will respond accordingly providing pleasant UX for writing and reading technical articles as well as experimenting with javascript and svg.`;

  // Effects
  /*
  I'm trying to do much here - this should be its own story to implement in 1 line!

  useEffect(() => {
    const afterFiveSeconds = 5000;
    const characterMilliseconds = 100;
    console.log('here 0: ');
    //if (staggerRowRef.current) {
    console.log('here 1: ');
    setTimeout(() => {
      mlTextAnimateInterval = setInterval(animation, characterMilliseconds);
    }, afterFiveSeconds);
    // }
  }, [mlTask]);
  */

  useEffect(() => {
    const { isFetching, palette } = state;
    if (!isFetching && !palette) {
      const newPalette = getColorPalettes(3); //numberUtil.getRandomInt(0, 5)
      setState({ ...state, palette: newPalette });
    }
  });

  if (!palette) {
    return null;
  }

  const headlineColor = palette[0];
  const subHeadlineColor = headlineColor;
  const staggerColor = palette[1];

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
        <div ref={staggerRowRef}>
          <Row>
            <ReverseTextAnimation color={staggerColor} />
            <FrozenLake />
          </Row>
        </div>
      </Wallpaper>
    </DeviceContext.Provider>
  );
};

export default Intro;
