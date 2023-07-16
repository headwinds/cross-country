import * as React from 'react';
import { Column } from '../../';
import { HomeProps } from './home.types';
import HomeTemplate from '../../templates/home/home';

import styles from './home.module.css';

const Home = ({ foo }: HomeProps) => {
  return <HomeTemplate isBlockedIn />;
};

export default Home;
