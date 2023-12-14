import React from 'react';
import { Column, Row, SubHeadline, Paragraph, Link, Headline, Image, List, ListItem } from '../../../..';

import { LinkedinLogo, GithubLogo, TwitterLogo } from 'phosphor-react';

const moss = '#bccd9d';
const gold = '#b2a25a';
const teal = '#0baeae';

interface HeadwindsProfile {
  isAuthenticated?: boolean;
}

const customLinkStyle = {
  textDecoration: 'none',
  boxShadow: 'none',
  borderBottom: 'none',
  alignItems: 'center',
  display: 'flex',
};

const customParagraphStyle = {
  marginLeft: 8,
  color: gold,
};

const HeadwindsProfile = ({ isAuthenticated }: HeadwindsProfile) => {
  return (
    <Column>
      <Row>
        <Column customStyle={{ padding: 0 }}>
         
          <Headline>
      
            Brandon Flowers
          </Headline>
        </Column>
      </Row>
      <Paragraph>
        I{"'"}m primarily a Frontend Developer, and am currently happily employed @{' '}
        <Link url="http://www.validere.com">Validere </Link>.
      </Paragraph>
      <Paragraph>
        I believe in the power of AI Collaboration, and wish to harness it to teach both people and machines about our
        climate change crisis and how to best manage carbon emissions.
      </Paragraph>
      <SubHeadline
        color={gold}
        customStyle={{
          backgroundColor: 'whitesmoke',
          padding: 8,
          fontWeight: 300,
        }}
      >
        As a passionate dev, I also write about Data Visualization, DIY APIs, State Machines & leveraging Natural
        Language Processing.
      </SubHeadline>
      <Paragraph>
        This site is a "build in public" experiment where I{"'"}m feauturing my own component library{' '}
        <Link url="https://www.npmjs.com/package/cross-country">cross-country</Link> to experiemnent with UI and my
        services written in <Link url="https://github.com/headwinds/python-notebooks/">Python</Link>,{' '}
        <Link url="https://github.com/headwinds/cabinquest">Node</Link>,{' '}
        <Link url="https://github.com/headwinds/northwind-frostpunk/">Go</Link> & PostgreSQL.{' '}
      </Paragraph>{' '}
      <Paragraph>
        The news card components are part of a research study where I'm tracking trends across over 50 RSS feeds, and
        gathering statistics which I hope to publish in the near future.
      </Paragraph>
      <Paragraph customStyle={{ marginBottom: 16 }}>
        You can also learn more about me through my social links:
      </Paragraph>
      <List customStyle={{ listStyleType: 'none' }}>
        <ListItem>
          <Link url="https://www.linkedin.com/in/branonflowers" customStyle={customLinkStyle}>
            <LinkedinLogo size={32} color={gold} weight="light" />
            <Paragraph customStyle={customParagraphStyle}>Linkedin</Paragraph>
          </Link>
        </ListItem>
        <ListItem>
          <Link url="https://www.github.com/headwinds" customStyle={customLinkStyle}>
            <GithubLogo size={32} color={gold} weight="light" />
            <Paragraph customStyle={customParagraphStyle}>Github</Paragraph>
          </Link>
        </ListItem>
        <ListItem>
          <Link url="https://www.twitter.com/headwinds" customStyle={customLinkStyle}>
            <TwitterLogo size={32} color={gold} weight="light" />
            <Paragraph customStyle={customParagraphStyle}>Twitter</Paragraph>
          </Link>
        </ListItem>
      </List>
    </Column>
  );
};
export default HeadwindsProfile;
