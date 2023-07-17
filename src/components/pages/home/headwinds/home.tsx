import * as React from 'react';
import { HomeProps } from './home.types';
import HomeTemplate from '../../../templates/home/headwinds';
import Header from './headwinds-header';
import Hero from './headwinds-hero';
import SideQuest from './headwinds-sidequest';
import Footer from './headwinds-footer';

const Home = ({ isBlockedIn = false }: HomeProps) => {
  return (
    <HomeTemplate
      isBlockedIn={isBlockedIn}
      hero={<Hero />}
      sidequest={<SideQuest />}
      header={<Header />}
      footer={<Footer />}
    />
  );
};

export default Home;
