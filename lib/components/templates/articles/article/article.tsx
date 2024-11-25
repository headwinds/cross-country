import * as React from "react";
import { Grid, Column, Row } from "../../../";
import clsx from "clsx";
import styles from "./article.module.css";

/*
GRID
- share & steal bar with spark line
- hero
- curator / author / stats / time to read / date
- split panel
--- article & ad sections 
--- comments & chat
- related & locked articles
- footer
*/

export interface ArticleTemplateProps {
  header: any;
  hero: any;
  curator: any;
  article: any;
  ai: any;
  articles: any;
  footer: any;
  isBlockedIn?: boolean;
}

const ArticleTemplate = ({
  header,
  hero,
  curator,
  article,
  ai,
  articles,
  footer,
  isBlockedIn = true,
}: ArticleTemplateProps) => {
  return (
    <Grid customClass={styles.gridContainer}>
      <Row
        customClass={clsx(styles.header, {
          [styles.commonBlockedIn]: isBlockedIn,
        })}
      >
        {header}
      </Row>
      <Row
        customClass={clsx(styles.hero, { [styles.heroBlockedIn]: isBlockedIn })}
      >
        {hero}
      </Row>
      <Column
        customClass={clsx(styles.curator, {
          [styles.commonBlockedIn]: isBlockedIn,
        })}
      >
        {header}
      </Column>
      <Column
        customClass={clsx(styles.article, {
          [styles.commonBlockedIn]: isBlockedIn,
        })}
      >
        {article}
      </Column>
      <Column
        customClass={clsx(styles.ai, {
          [styles.commonBlockedIn]: isBlockedIn,
        })}
      >
        {ai}
      </Column>
      <Row
        customClass={clsx(styles.articles, {
          [styles.commonBlockedIn]: isBlockedIn,
        })}
      >
        {articles}
      </Row>
      <Row
        customClass={clsx(styles.footer, {
          [styles.commonBlockedIn]: isBlockedIn,
        })}
      >
        {footer}
      </Row>
    </Grid>
  );
};

export default ArticleTemplate;
