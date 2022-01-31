import React, { Component } from 'react';

import { Paragraph, CrossCountryLogo, Garden } from 'cross-country';

export default class App extends Component {
  render() {
    const gardenConfig = {
      url:
        'https://assets2.rockpapershotgun.com/wildermyth_OMrdDbN.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/wildermyth_OMrdDbN.jpg',
      a11y: 'wildermyth',
      text: 'wildermyth',
      route: '/wildermyth',
    };
    return (
      <div>
        <CrossCountryLogo />
        <Paragraph>hello</Paragraph>
        <Garden config={gardenConfig} />
      </div>
    );
  }
}
