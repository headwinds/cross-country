import * as React from 'react';
import { Grid, Column, Row } from '../../../..';
import { HeadwindsHomeProps } from './headwinds-home.types';
import clsx from 'clsx';
import styles from './headwinds-home.module.css';

const HeadwindsHomeHeroTemplate = ({ header, hero, sidequest, footer, isBlockedIn = false }: HeadwindsHomeProps) => {
  return (
    <Grid customClass={styles.gridContainerHero}>
      <Row customClass={clsx(styles.header, { [styles.commonBlockedIn]: isBlockedIn })}>{header}</Row>
      <Row customClass={styles.content}>
        <Column customClass={clsx(styles.hero, { [styles.heroBlockedIn]: isBlockedIn })}>{hero}</Column>
      </Row>
      <Row customClass={clsx(styles.footer, { [styles.commonBlockedIn]: isBlockedIn })}>{footer}</Row>
    </Grid>
  );
};

export default HeadwindsHomeHeroTemplate;
