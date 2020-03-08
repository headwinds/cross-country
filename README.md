# cross-country

> an atomic react design system for forest bathers

[![NPM](https://img.shields.io/npm/v/cross-country.svg)](https://www.npmjs.com/package/cross-country) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```
yarn add cross-country
```
orcd ..
```
npm install --save cross-country
```

## Usage

```jsx
import React, { Component } from 'react'
import {Block, Flex, Image, Headline, Paragraph, Princess, Wolf} from './components';

import MyComponent from 'cross-country'

class Example extends Component {
  render () {
    return (
      <Block>
          <Headline text="My words needs another design system" />
          <Flex>
            <Image width="300" url='https://images.unsplash.com/photo-1512411233342-92208dfe81af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80' />
            <Block>
              <Wolf />
              <Paragraph text="hello Wolf" />
              <Princess />
            </Block>
          </Flex>
        </Block>
    )
  }
}
```

## License

MIT © [headwinds](https://github.com/headwinds)
