# cross-country

> an atomic react design system for lonely forest bathers

[![NPM](https://img.shields.io/npm/v/cross-country.svg)](https://www.npmjs.com/package/cross-country) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Warning: at this point, the project shell is more interesting/valuable than the actual project

[Guide](https://cross-country.vercel.app)

Tech 
- react & react-spring 
- scss modules
- D3 

Progress Complete 
- 10% 

## Install

```
yarn add cross-country
```
or
```
npm install --save cross-country
```

You want to run 2 directories

1. where you build the components
```
yarn start
```

2. Storybook
```
yarn storybook
```

Open your browser to http://localhost:6006/

To build & deploy storybook `yarn build-storybook`

3. Example - you will need to link the library - if link fail, everything in the example is also available in the storybook
```
cd example
yarn start 
```

Open your browser to http://localhost:3000/

## Usage

```jsx
import React, { Component } from 'react'
import {Column, Row, Image, Headline, Paragraph, Wolf} from 'cross-country';

const data = {
  headline: "My world needs another design system",
  image: {
    url: "https://images.unsplash.com/photo-1512411233342-92208dfe81af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
    a11y: "a nice aframe from unsplash",
    width: 300
  },
  wolf: {
    url: "https://images.unsplash.com/photo-1512411233342-92208dfe81af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
    text: "K-2SO & Jyn Erso" 
    a11y: "K-2SO & Jyn Erso"
}

const {headline, wolf, image } = data;

const App = () => (
      <Column>
          <Headline text={headline} />
          <Row>
            <Image {...image} />
            <Column>
              <Wolf config={wolf} />
            </Column>
          </Row>
        </Column>
    )
export default App; 
```

All the components are stateless functions. They do not use any state hooks. Your project's components will control the state, and you simply pass in the desire state change to each component to update them. 

## Publish to NPM

After you commit, make sure you have updated the version number before publishing usually `npm version patch`

```
npm login
your-username-not-your-email
your-password
now-your-email
npm publish
```

## Docs

`yarn docs`

## Help & Thanks

* [create-react-library](https://www.npmjs.com/package/create-react-library)
* [mobile-first media queries](https://medium.com/codeartisan/breakpoints-and-media-queries-in-scss-46e8f551e2f2)
* [pure-css-accessible-checkboxes-and-radios-buttons](https://medium.com/claritydesignsystem/pure-css-accessible-checkboxes-and-radios-buttons-54063e759bb3)
* [multiple-classnames-css-modules-react](https://zeph.co/multiple-classnames-css-modules-react)
* [a-guide-to-js-docs-for-react-js](https://www.inkoop.io/blog/a-guide-to-js-docs-for-react-js/)

## License

MIT © [headwinds](https://github.com/headwinds)
