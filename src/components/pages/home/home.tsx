import * as React from 'react';
import { Column } from '../../';
import { HomeProps } from './home.types';

import styles from './home.module.css';

const Home: React.FC<HomeProps> = ({ foo }) => {
  return (
    <Column dataTestId="home" customClass={styles.Home}>
      {foo || 'plan & start building'}
    </Column>
  );
};

export default Home;
