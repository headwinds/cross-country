import React, { Component } from 'react';
import { Column, SubHeadline, ListItem, List, Link } from '../../';
import styles from './related-articles.scss';
import clsx from 'clsx';

const RelatedArticles = ({ articles = [], text = 'Related Articles', hasBackground = false }) => {
  const list = articles.map(({ title, url }) => (
    <ListItem>
      <Link url={url}>{title}</Link>
    </ListItem>
  ));
  return (
    <Column hasBackground={hasBackground}>
      <SubHeadline text={text} />
      <List>{list}</List>
    </Column>
  );
};

export default RelatedArticles;
