# cross-country

> an atomic react design system for forest bathers

[![NPM](https://img.shields.io/npm/v/cross-country.svg)](https://www.npmjs.com/package/cross-country) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[Guide](https://cross-country.now.sh)

## Install

```
yarn add cross-country
```
or
```
npm install --save cross-country
```

## Usage

```jsx
import React, { Component } from 'react'
import {Column, Row, Image, Headline, Paragraph, Wolf} from './components';

import MyComponent from 'cross-country'

class Example extends Component {
  render () {
    return (
      <Column>
          <Headline text="My words needs another design system" />
          <Row>
            <Image width="300" url='https://images.unsplash.com/photo-1512411233342-92208dfe81af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80' />
            <Column>
              <Wolf text={"K-2SO & Jyn Erso"} url="https://forallnerds.com/wp-content/uploads/2016/12/Rogue-One-A-Star-Wars-Story-Trailer-1-700x391.jpg" />
            </Column>
          </Row>
        </Column>
    )
  }
}
```

## License

MIT © [headwinds](https://github.com/headwinds)
