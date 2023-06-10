import * as React from 'react';
import { Grid, Column, Row } from '../../';
import { HomeProps } from './home.types';

import styles from './home.module.css';

const Home: React.FC<HomeProps> = ({ foo }) => {
  return (
    <Grid customClass={styles.gridContainer}>
      <Column customClass={styles.header}></Column>
      <Column customClass={styles.hero}></Column>
      <Column customClass={styles.panel1}></Column>
      <Column customClass={styles.panel2}></Column>
      <Column customClass={styles.panel3}></Column>
      <Column customClass={styles.footer}></Column>
    </Grid>
  );
};

export default Home;
