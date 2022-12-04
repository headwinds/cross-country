# cross-country

> an atomic react design system for lonely forest bathers

[![NPM](https://img.shields.io/npm/v/cross-country.svg)](https://www.npmjs.com/package/cross-country) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Core Tech 
- react (18.02) & react-spring 
- scss modules
- D3 
- Storybook

[Cross Country Storybook via Github Pages](https://headwinds.github.io/cross-country)

Bored of building enterprise UI? Are you a fan of the Sims, Starcraft, Chess, Dungeons and Dragons and other table top role playing games aka TTRPGs? By playing with code, you can actually hone your dayjob skills while exploring subject matter that you are more passionate. 

Do you keep a sketch book? Do you draw notes about fantasy UI, game mechanics and envision a future of EVs and trips to Mars? 

This library is an escape from conversative eCommerce apps, and meant to translate your analog sketch book pages into a digital works that can be shared by other like-minded individuals. Perhaps, they will become some new mixed AR/VR experience?!

The components within this library are designed responsively to be used to write articles; create tile-based games; or even better combine writing, gaming, with a sample dataset and tell a story or converse with an AI.  

By wrapping html, each component is augmented for building accessible experiences across screens. A simple page may look like this:

```
<Wrapper>
  <Page>
    <Column>
      <Paragraph>
      By wrapping html, each component is augmented for building accessible experiences across screens.
      </Paragraph>
      <Paragraph>
       A simple page may look like this with the default design settings.
      </Paragraph>
    </Column>
    <Column>
      <MyGameOrExperiementHere />
    </Column>
  </Page>
  <Wallpaper />
</Wrapper>
```
Progress Complete 
- 35% 

Note to self: this is library can only be built with Node 14 (tested with 14.20.1) - I need to sort out upgrading to Dart Sass with Webpack 5 and Storybook but if you plan to use it any other projects that uses the latest version of node, it should be fine to import since it's all compiled down to vanila js. The current issue preventing the upgrade has something to do with sass-loader and migration from 7 to 8 where I most likey need to upgrade how the options are configured.

```
Module build failed (from ./node_modules/sass-loader/dist/cjs.js):
Error: Missing binary. See message above.
```

Again no errors with Node 14.20.1 but they appear as I switch to 16.9.1

Another radical approach would be to harvest the React and trade SCSS for styled components or tailwind; just not a fan of the way tailwinds looks in the DOM though although I've heard enough devs say you get used to it. Perhaps, I'm ready for PostCSS?! Or something else?!

[n 14.20.1](https://www.npmjs.com/package/n)

For now, I believe I'm fine to continue building on 14. It is not sunset yet like Node 12. Yet... does trouble a bit.
I know I won't get any performance wins by supporting Node 16 so there isn't much point sweating it. 

## NextJS 

Part of my dogfooding process is to use my library on my own site, [headwinds](https://headwinds.vercel.app).

Initially, I ran into a build error where I had to account for every `window` and `document` ensuring that they are not referenced until the UI hits the client. After hunting through my webpack build file, I was ble to eliminate them all, and it now works 100% server side!  

## Unsplash Config

Before installing, create a cross-country-config-private.js file in your root directory by copying the cross-country-config.js and renaming it.

```
export const privateConfig = {
  UNSPLASH_API_KEY: 'YOUR-UNSPLASH-KEY',
};
```

## Install

```
yarn add cross-country
```
or
```
npm install --save cross-country
```

You want to open 2 terminals

Terminal 1. where you build the components
```
yarn start
```

Terminal 2. Storybook
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

In order to use React Hooks, you will also have to [link react](https://stackoverflow.com/a/58612244/581803) or you will get a rule of hooks error.

If we see: Error: Invalid hook call. Hooks can only be called inside of the body

run:

```
npm link example/node_modules/react
```

You may need to stop and restart both library and example folders.

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

## Publish to NPM

After you commit, make sure you have updated the version number before publishing usually `npm version patch`

```
npm login
your-username-not-your-email
your-password
now-your-email
npm publish
```

If you 2-factor indentifaction, setup you may have to use for Google Authenticator on your phone.

Since I had .npmrc setup in other projects, I had to one for this project [using the default](https://docs.npmjs.com/cli/v8/using-npm/registry). At first, I thought I needed /headwinds and then /headwinds/cross-country but nope! Just use the default - see my .npmrc file.  

## Publish Storybook

Since I already have `headwinds` repo, I followed the github pages doc to create another repo this time empty named `headwinds.github.io` and then was able to publish and host the storybook.


```
npm run deploy-storybook-ci
```

## Inspiration
* [create-react-library](https://www.npmjs.com/package/create-react-library)
* [mobile-first media queries](https://medium.com/codeartisan/breakpoints-and-media-queries-in-scss-46e8f551e2f2)
* [pure-css-accessible-checkboxes-and-radios-buttons](https://medium.com/claritydesignsystem/pure-css-accessible-checkboxes-and-radios-buttons-54063e759bb3)
* [multiple-classnames-css-modules-react](https://zeph.co/multiple-classnames-css-modules-react)
* [a-guide-to-js-docs-for-react-js](https://www.inkoop.io/blog/a-guide-to-js-docs-for-react-js/)
* [wattenberger react-and-d3](https://wattenberger.com/blog/react-and-d3)
* [tile corner reticle](https://codepen.io/NyX/pen/JYOzWW)
* [flexboxpatterns](https://www.flexboxpatterns.com/)
* [nextra](https://nextra.vercel.app/)
* [XState & React](https://xstate.js.org/docs/packages/xstate-react/#quick-start)


## Fullstack
* [Flask & React](https://blog.appseed.us/flask-react-full-stack-seed-projects/)
## TILE
* [mapeditor](https://www.mapeditor.org/)
* [phase3 tile demo](https://itnext.io/modular-game-worlds-in-phaser-3-tilemaps-3-procedural-dungeon-3bc19b841cd)

## MODELS & DATASETS
* [tensorflowjs model](https://www.tensorflow.org/js/models)
* [tidy models](https://www.tidymodels.org/)
* [fivethirtyeight](https://fivethirtyeight.com/)
* [Public APIs](https://github.com/public-apis/public-apis)
## ALGORITHMS
* [Javascript The Algorithms](https://github.com/TheAlgorithms/Javascript)

## Map Generators
* [stygiangen](https://github.com/slashman/stygiangen/)
* [Fantasy-Map-Generator](https://azgaar.github.io/Fantasy-Map-Generator/)
## Functional Programming
* [practical-functional-programming-in-javascript-side-effects-and-purity](https://dev.to/richytong/practical-functional-programming-in-javascript-side-effects-and-purity-revised-420h)

## Graph 
* [networkx](https://networkx.org/documentation/stable/auto_examples/index.html)

## Learning Python
* [realpython quizzes](https://realpython.com/quizzes/)

## Data Visualization
* [Seeing Theory](https://seeing-theory.brown.edu/)
* [Setosa](https://setosa.io/)
* [moebio](http://moebio.com/)

## Stats, NLP & Machine Learning
* [what is machine learning anway](https://boingboing.net/2021/11/08/what-is-machine-learning-anyway-this-three-minute-animation-delivers-an-excellent-simple-explanation.html)
* [Spacey](https://spacy.io/)
* [Open AI](https://openai.com/)
* [Hugging Face](https://huggingface.co/)
* [Kaggle](https://www.kaggle.com/)
* [Rasa](https://rasa.com/)
* [Harvest Entities in Text with Wolfram](https://www.wolfram.com/language/12/natural-language-processing/harvest-entities-in-text.html?product=mathematica)
* [Storytelling](https://pudding.cool/process/how-to-make-dope-shit-part-3/)
* [Contextual Bandit](https://towardsdatascience.com/contextual-bandits-and-reinforcement-learning-6bdfeaece72a)
* [Deep Learning Drizzle](https://deep-learning-drizzle.github.io/)
* [Intro to Tensorflow](https://www.youtube.com/watch?v=LwM7xabuiIc)
* [Distill](https://distill.pub/)
* [Creative Applications](https://www.creativeapplications.net/)
* [Making of an AI Storyteller](https://towardsdatascience.com/the-making-of-an-ai-storyteller-c3b8d5a983f5)

### ML & Gaming
* [Crafter](https://danijar.com/project/crafter/)
* [TextWorldExpress](https://github.com/cognitiveailab/TextWorldExpress)

## Goal Setting
* [80 days to get into FAANG](https://towardsdatascience.com/80-days-to-get-into-faang-5c77f27d5224)
* [Jack Dorsey's Don't do list](https://www.cnbc.com/2018/10/22/twitter-ceo-jack-dorsey-writes-a-wont-do-list-every-day.html)

## License

MIT © [headwinds](https://github.com/headwinds)

