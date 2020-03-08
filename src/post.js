import React, { Component } from 'react'
import {Block, Flex, Image, Headline, Paragraph, Princess, Wolf} from './components';

export * from './components';

export default class Post extends Component {

  render() {
    return (
        <Block>
          <Headline text="My words needs another design system" />
          <Flex>
            <Image width="300" url='https://images.unsplash.com/photo-1512411233342-92208dfe81af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80' />
            <Block>
              <Paragraph text="hello" />
              <Paragraph text="hello" />
              <Paragraph text="hello" />
              <Paragraph text="hello" />
              <Princess />
              <Wolf />
            </Block>
          </Flex>
        </Block>
    )
  }
}
