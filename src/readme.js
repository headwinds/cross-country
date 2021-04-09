import React from 'react';
import { Column, Row, Image, SubHeadline, Wolf } from './components';

const data = {
  headline: 'My world needs another design system',
  image: {
    url:
      'https://images.unsplash.com/photo-1512411233342-92208dfe81af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    a11y: 'a nice aframe from unsplash',
    width: 300,
  },
  wolf: {
    url: 'https://forallnerds.com/wp-content/uploads/2016/12/Rogue-One-A-Star-Wars-Story-Trailer-1-700x391.jpg',
    text: 'K-2SO & Jyn Erso',
    a11y: 'K-2SO & Jyn Erso',
  },
};

const { headline, wolf, image } = data;
const config = wolf;

const ReadMe = () => (
  <Column>
    <SubHeadline text={headline} />
    <Row>
      <Image {...image} />
      <Column>
        <Wolf config={config} />
      </Column>
    </Row>
  </Column>
);
export default ReadMe;
