import React from 'react';
import { Column, Login } from '../../..';

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
      <Row>
        <Column customStyle={{ padding: 0 }}>
          <Image a11y="brandon flowers" url={brandon} width={100} height={100} customStyle={{ borderRadius: '50%' }} />

          <Headline>
            <Bolt />
            Brandon Flowers
          </Headline>
        </Column>
        {/* <AnimateNumber delay="1000" to={234002} from={0} /> */}
      </Row>
      <Paragraph>
        I{"'"}m currently seeking the opportunity to make a major impact at a new company! Whether you need a mix of fullstack or 100% front-end, I can help you and your team build your roman empire! I 💛 solving complex customer journeys and workflows. Learn more on my       <Link url="https://github.com/headwinds/">Github</Link>.
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
export default HeadwindsSidequest;
