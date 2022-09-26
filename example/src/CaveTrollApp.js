import { inspect } from '@xstate/inspect';

import React from 'react';
import { Garden, Headline, SubHeadline, Paragraph, Column, CaveTroll } from 'cross-country';

inspect({
  // options
  // url: 'https://stately.ai/viz?inspect', // (default)
  iframe: false, // open in new window
});

const CaveTrollApp = () => {
  const gardenConfig = {
    url: 'https://assets2.rockpapershotgun.com/wildermyth_OMrdDbN.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/wildermyth_OMrdDbN.jpg',
    a11y: 'wildermyth',
    text: 'Inspiration: wildermyth',
    route: '/wildermyth',
  };
  return (
    <Column>
      <Column customStyle={{ width: '100%' }}>
        <Headline>Cave Troll</Headline>
        <CaveTroll />
      </Column>
      <Garden config={gardenConfig} />
    </Column>
  );
};

export default CaveTrollApp;
