import * as React from 'react';
import { HomeProps } from './home.types';
import HomeTemplate from '../../../templates/home/headwinds';
import Header from './headwinds-header';
import Hero from './headwinds-hero';
import SideQuest from './headwinds-sidequest';
import Footer from './headwinds-footer';
// import a txt file
import listicle from './cross_country_list_may_2023';
import useListicle from '../../../../hooks/useListicle';

const Home = ({ isBlockedIn = false, isLoading = false }: HomeProps) => {
  // I want a loader that does something interesting with my collection of listicles

  const listicleItems = useListicle({ listicle });
  console.log('Headwinds home: ', listicleItems);
  return (
    <HomeTemplate
      isBlockedIn={isBlockedIn}
      hero={<Hero isLoading isTesting />}
      sidequest={<SideQuest isLoading />}
      header={<Header isLoading />}
      footer={<Footer isLoading />}
    />
  );
};

export default Home;
