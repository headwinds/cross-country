import React, { Component } from 'react';
import { Column, SubHeadline, ListItem, List, Link, Paragraph } from '../../';
import styles from './related-articles.module.css';
import clsx from 'clsx';

const RelatedArticles = ({ articles = [], text = 'Related Articles', hasBackground = false }) => {
  const list = articles.map(({ title, url, id }) => (
    <ListItem key={id}>
      <Paragraph>
        <Link url={url}>{title}</Link>
      </Paragraph>
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
