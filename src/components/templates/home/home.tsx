import * as React from 'react';
import { Grid, Column, Row } from '../../';
import { HomeProps } from './home.types';
import clsx from 'clsx';
import styles from './home.module.css';

const HomeTemplate = ({ header, hero, panel1, panel2, panel3, footer, isBlockedIn = false }: HomeProps) => {
  return (
    <Grid customClass={styles.gridContainer}>
      <Row customClass={clsx(styles.header, { [styles.commonBlockedIn]: isBlockedIn })}>{header}</Row>
      <Row customClass={clsx(styles.hero, { [styles.heroBlockedIn]: isBlockedIn })}>{hero}</Row>
      <Column customClass={clsx(styles.panel1, { [styles.commonBlockedIn]: isBlockedIn })}>{panel1}</Column>
      <Column customClass={clsx(styles.panel2, { [styles.commonBlockedIn]: isBlockedIn })}>{panel2}</Column>
      <Column customClass={clsx(styles.panel3, { [styles.commonBlockedIn]: isBlockedIn })}>{panel3}</Column>
      <Row customClass={clsx(styles.footer, { [styles.commonBlockedIn]: isBlockedIn })}>{footer}</Row>
    </Grid>
  );
};

export default HomeTemplate;
