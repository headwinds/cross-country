import React from 'react';
import { Column, Row, SubHeadline, Paragraph, Link, Headline, Image, List, ListItem, AnimateNumber } from '../../..';
import brandon from './brandon.png';
import bolt from './bolt.svg'; // import cross_country from './cross-country.svg';
// import Image from 'next/image';
// <Image alt="brandon flowers" src={brandon} width={200} height={300} />
// <Image alt="energy bolt" src={bolt} width={30} height={30} style={{ padding: 4 }} />

const moss = '#bccd9d';
const gold = '#cfbd6f';

const HeadwindsSidequest = () => {
  return (
    <Column customStyle={{ width: 380 }}>
      <Row>
        <Column>
          <Image a11y="brandon flowers" url={brandon} width={200} height={300} />

          <Headline>
            <Image a11y="lightening bolt" url={bolt} width={30} height={30} /> Brandon Flowers
          </Headline>
        </Column>
        {/* <AnimateNumber delay="1000" to={234002} from={0} /> */}
      </Row>
      <Paragraph size="medium">
        I{"'"}m a Full Stack Developer @ <Link url="http://www.validere.com">Validere</Link>
      </Paragraph>
      <SubHeadline color={gold}>
        Passionate about Data Visualization, APIs, Natural Language Processing & AI Collaboration
      </SubHeadline>
      <Paragraph customStyle={{ marginBottom: 16 }}>
        This is a "build in public" experiment where I{"'"}m building with my own component library{' '}
        <Link url="https://www.npmjs.com/package/cross-country">cross-country</Link> to experiemnent with data
        visualization and distributed services, connecting containers written in{' '}
        <Link url="https://github.com/headwinds/python-notebooks/">Python</Link>,{' '}
        <Link url="https://github.com/headwinds/cabinquest">Node</Link>,{' '}
        <Link url="https://github.com/headwinds/northwind-frostpunk/">Go</Link> & PostgreSQL.
      </Paragraph>
      <List>
        <ListItem>
          <Link url="https://www.linkedin.com/in/brandonflowers">Linkedin</Link>
        </ListItem>
        <ListItem>
          <Link url="https://www.github.com/headwinds">Github</Link>
        </ListItem>
        <ListItem>
          <Link url="https://www.twitter.com/headwinds">Twitter</Link>
        </ListItem>
      </List>
    </Column>
  );
};
export default HeadwindsSidequest;
