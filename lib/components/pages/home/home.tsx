import * as React from 'react';
import { HomeProps } from './home.types';
import HomeTemplate from '../../templates/home/home';

const Home = ({ isBlockedIn = false }: HomeProps) => {
  return <HomeTemplate isBlockedIn={isBlockedIn} />;
};

export default Home;
