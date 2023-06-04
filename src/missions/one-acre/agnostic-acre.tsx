/*
Experiment...

How could I pass in either React or React-Native components depending on the environement?!
*/

import React from 'react';
//import { View, Text, Platform } from 'react-native';
import { Column, Row, Tile, SubHeadline, Paragraph, List, ListItem, Link, RelatedArticles } from '../../components';

const Platform = { OS: 'web' };
const View = ({ children }) => {
  return <Column>{children}</Column>;
};

const Text = ({ children }) => {
  return <Paragraph>{children}</Paragraph>;
};

// Define a generic container component that accepts a "content" prop
// that specifies the content to be rendered within the component
type Props = {
  content: React.ComponentType<any>;
};

// Platform.OS === 'ios' || Platform.OS === 'android'
export const Grid = ({ content: Content }: Props) => {
  // Render the component passed in as the "content" prop
  return <Content />;
};

export const AgnosticRowOfTiles = ({ tiles, key, styles }) => {
  return (
    <Row customClass={styles.row} key={key}>
      {tiles}
    </Row>
  );
};

export const AgnosticTile = ({ fill: tileColor, value, id }) => {
  return <Tile model={{ fill: tileColor, value }} key={id}></Tile>;
};

export default Grid;
