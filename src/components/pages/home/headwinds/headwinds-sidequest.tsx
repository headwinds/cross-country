import React from 'react';
import { Column, Row, SubHeadline, Paragraph, Link, Headline, Image, List, ListItem, Login } from '../../..';
import brandon from './brandon_square.png';
import { Bolt } from './bolt';
import { LinkedinLogo, GithubLogo, TwitterLogo } from 'phosphor-react';

const moss = '#bccd9d';
const gold = '#b2a25a';
const teal = '#0baeae';

interface HeadwindsSidequestProps {
  onLoadedCallback?: (error) => void;
}

/*
Sidequest Goals:

Create a sidequest component that is a "side" section of the page

What do I want to see as soon as I login in?
- My profile picture and a prompt to make or finish a quest depending on what I  have done so far
- query my time line, judge my progress, prmopt me to do something

What are some of things that I can make or model?

Can I create a short quest to go learn something with a quiz and some stats at the end?


*/

const HeadwindsSidequest = ({ onLoadedCallback }: HeadwindsSidequestProps) => {
  return (
    <Column>
      <Login isAnimated />
      {/*<Row>
        <Column customStyle={{ padding: 0 }}>
          <Image a11y="brandon flowers" url={brandon} width={100} height={100} customStyle={{ borderRadius: '50%' }} />
          <Headline>
            <Bolt />
            Brandon Flowers
          </Headline>
        </Column>
      </Row>*/}
    </Column>
  );
};
export default HeadwindsSidequest;
