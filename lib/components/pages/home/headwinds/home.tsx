import * as React from 'react';
import { useState } from 'react';
import { HomeProps } from './home.types';
import HomeTemplateHero from '../../../templates/home/headwinds/headwinds-home-hero';
import Header from './header/headwinds-header';
import Hero from './headwinds-hero';
//import SideQuest from './headwinds-sidequest';
import Footer from './headwinds-footer';
import { Loading, Error } from '../../../';

const Home = ({ isBlockedIn = false }: HomeProps) => {
  // the parent component should manage the relationship between its children
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0); // 0 - 100

  const incProgress = 33;

  const updateProgress = (error, overrideProgres = incProgress) => {
    if (error) {
      setError(error);
    }

    setProgress(progress + overrideProgres);
    if (progress >= 100) {
      setIsLoaded(true);
    }
  };

  const onHeroLoaded = error => {
    console.log('onHeroLoaded');
    updateProgress(error, 100);
  };

  const onSideQuestLoaded = error => {
    updateProgress(error);
  };

  const onListiclesLoaded = error => {
    updateProgress(error);
  };

  console.log('home rendered');

  if (error) {
    return <Error />;
  }

  if (!isLoaded) {
    // have add them first!!!!
    //return <Loading progress={progress} />;
  }

  return (
    <HomeTemplateHero
      isBlockedIn={isBlockedIn}
      hero={<Hero onLoadedCallback={onHeroLoaded} />}
      header={<Header isLoading />}
      footer={<Footer isLoading />}
    />
  );
};

export default Home;
