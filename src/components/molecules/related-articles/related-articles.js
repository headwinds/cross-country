import React, { Component } from 'react';
import { Column, SubHeadline, ListItem, List, Link, Paragraph } from '../../';
import styles from './related-articles.scss';
import clsx from 'clsx';

const RelatedArticles = ({ articles = [], text = 'Related Articles', hasBackground = false }) => {
  const list = articles.map(({ title, url, id }) => {
    const Child = () => <span>{title}</span>;
    return (
      <ListItem key={id}>
        <Paragraph>
          <Link url={url}>
            <Child />
          </Link>
        </Paragraph>
      </ListItem>
    );
  });
  return (
    <Column hasBackground={hasBackground}>
      <SubHeadline text={text} />
      <List>{list}</List>
    </Column>
  );
};

export default RelatedArticles;
