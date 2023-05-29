# cross-country

> an atomic react design system for lonely forest bathers

[![NPM](https://img.shields.io/npm/v/cross-country.svg)](https://www.npmjs.com/package/cross-country) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Core Tech

- react (18.02) & react-spring
- CSS modules
- D3
- Storybook
- Typescript

[Cross Country Storybook via Github Pages](https://headwinds.github.io/cross-country)

Bored of building the same enterprise UI without any sizzle? Are you a fan of the Sims, Starcraft, Chess, Dungeons and Dragons and other table top role playing games (TTRPGs)?

Do you keep a sketch book, and draw notes about fantasy UI, game mechanics and envision a future of EVs and trips to Mars? Do you pour over your personal stats from Strava or Spotify? Is your year always in review?! By playing with code, you can actually hone your dayjob skills while exploring subject matter that you are more passionate.

This library is an escape from conversative eCommerce apps, and meant to translate your analog sketch book pages into a digital works that can be shared by other like-minded individuals. Perhaps, they will become some new mixed AR/VR experience?! Perhaps, we'll keep it simple and retro. I'm know I'm not tired of 2D games.

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

### Generating New Components

I've included a handy NodeJS util file under `generate-component` folder. Instead of copy pasting components to create a new component, you can instead run this command to generate all the files you need to plan & start building out a new component. To use it:

```
yarn new YourComponentName YourAtomicType
```

example

```
yarn new accordion molecules
```

This will generate the following files and your component name will also be captilized (ie import { Accordion } from "country-country"):

```
/src
  /YourComponentName
    /__stories__
      YourComponentName.stories.tsx
    /__tests__
      YourComponentName.test.tsx
    index.ts
    YourComponentName.tsx
    YourComponentName.types.ts
    YourComponentName.module.css
    index.d.ts
    typings.d.ts
```

When you ready, remember to expose the component in the index.ts file at the root.

## SCSS to CSS modules

Originally, I started with SCSS Module but "downgraded" to CSS to upgrade Node from 12 to 18 and possibly invest in PostCSS or something else in the future! Also CSS Modules works with React Native.

[n 14.20.1](https://www.npmjs.com/package/n)

## Webpack 4 migration to 5

[Storybook support for Webpack 5](https://github.com/storybookjs/storybook/issues/19692)

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

While building, you can use Storybook

```
yarn storybook
```

When you are ready to publish, you can test the build by starting it

```
yarn start
```

Open your browser to http://localhost:6006/

To build & deploy storybook `yarn build-storybook`

## Publish to NPM

After you commit, make sure you have updated the version number before publishing usually `npm version patch`

```
npm login
your-username-not-your-email
your-password
now-your-email
npm publish
```

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

If you 2-factor indentifaction, setup you may have to use for Google Authenticator on your phone.

Since I had .npmrc setup in other projects, I had to one for this project [using the default](https://docs.npmjs.com/cli/v8/using-npm/registry). At first, I thought I needed /headwinds and then /headwinds/cross-country but nope! Just use the default - see my .npmrc file.

## Publish Storybook

Since I already have `headwinds` repo, I followed the github pages doc to create another repo this time empty named `headwinds.github.io` and then was able to publish and host the storybook.

```
npm run deploy-storybook-ci
```

## Inspiration

- [creating your own react component library](https://blog.harveydelaney.com/creating-your-own-react-component-library/)
- [Shopify polaris-viz](https://polaris-viz.shopify.com/)
- [create-react-library](https://www.npmjs.com/package/create-react-library)
- [mobile-first media queries](https://medium.com/codeartisan/breakpoints-and-media-queries-in-scss-46e8f551e2f2)
- [pure-css-accessible-checkboxes-and-radios-buttons](https://medium.com/claritydesignsystem/pure-css-accessible-checkboxes-and-radios-buttons-54063e759bb3)
- [multiple-classnames-css-modules-react](https://zeph.co/multiple-classnames-css-modules-react)
- [a-guide-to-js-docs-for-react-js](https://www.inkoop.io/blog/a-guide-to-js-docs-for-react-js/)
- [wattenberger react-and-d3](https://wattenberger.com/blog/react-and-d3)
- [tile corner reticle](https://codepen.io/NyX/pen/JYOzWW)
- [flexboxpatterns](https://www.flexboxpatterns.com/)
- [nextra](https://nextra.vercel.app/)
- [XState & React](https://xstate.js.org/docs/packages/xstate-react/#quick-start)
- [Typescript & SCSS](https://lwebapp.com/en/post/cannot-find-module-scss)

## Fullstack

- [Flask & React](https://blog.appseed.us/flask-react-full-stack-seed-projects/)

## TILE

- [mapeditor](https://www.mapeditor.org/)
- [phase3 tile demo](https://itnext.io/modular-game-worlds-in-phaser-3-tilemaps-3-procedural-dungeon-3bc19b841cd)

## MODELS & DATASETS

- [tensorflowjs model](https://www.tensorflow.org/js/models)
- [tidy models](https://www.tidymodels.org/)
- [fivethirtyeight](https://fivethirtyeight.com/)
- [Public APIs](https://github.com/public-apis/public-apis)

## ALGORITHMS

- [Javascript The Algorithms](https://github.com/TheAlgorithms/Javascript)
- [New Years Gift 75 Leetcode Questions](https://www.teamblind.com/post/New-Year-Gift---Curated-List-of-Top-75-LeetCode-Questions-to-Save-Your-Time-OaM1orEU)

## Maps

- [stygiangen](https://github.com/slashman/stygiangen/)
- [Fantasy-Map-Generator](https://azgaar.github.io/Fantasy-Map-Generator/)
- [react plotly mapbox](https://towardsdatascience.com/a-step-by-step-guide-to-develop-a-map-based-application-part-i-757766b04f77)

## Automation

- [Playwright & Github Actions](https://maciekpalmowski.dev/buying-a-bicycle-using-playwright/)
- [Vercel cronjobs](https://vercel.com/blog/cron-jobs)

## Functional Programming

- [practical-functional-programming-in-javascript-side-effects-and-purity](https://dev.to/richytong/practical-functional-programming-in-javascript-side-effects-and-purity-revised-420h)

## Graph

- [networkx](https://networkx.org/documentation/stable/auto_examples/index.html)

## Learning Python

- [realpython quizzes](https://realpython.com/quizzes/)

## Data Visualization

- [Seeing Theory](https://seeing-theory.brown.edu/)
- [Setosa](https://setosa.io/)
- [moebio](http://moebio.com/)

## Stats, NLP & Machine Learning

- [what is machine learning anway](https://boingboing.net/2021/11/08/what-is-machine-learning-anyway-this-three-minute-animation-delivers-an-excellent-simple-explanation.html)
- [build a basic model](https://towardsdatascience.com/building-a-basic-machine-learning-model-in-python-d7cca929ee62)
- [Spacey](https://spacy.io/)
- [Open AI](https://openai.com/)
- [Hugging Face](https://huggingface.co/)
- [Kaggle](https://www.kaggle.com/)
- [Rasa](https://rasa.com/)
- [Harvest Entities in Text with Wolfram](https://www.wolfram.com/language/12/natural-language-processing/harvest-entities-in-text.html?product=mathematica)
- [Storytelling](https://pudding.cool/process/how-to-make-dope-shit-part-3/)
- [Contextual Bandit](https://towardsdatascience.com/contextual-bandits-and-reinforcement-learning-6bdfeaece72a)
- [Deep Learning Drizzle](https://deep-learning-drizzle.github.io/)
- [Intro to Tensorflow](https://www.youtube.com/watch?v=LwM7xabuiIc)
- [Distill](https://distill.pub/)
- [Creative Applications](https://www.creativeapplications.net/)
- [Making of an AI Storyteller](https://towardsdatascience.com/the-making-of-an-ai-storyteller-c3b8d5a983f5)
- [Ivy: a mission to unify all ML frameworks](https://lets-unify.ai/)
- [Replicate](https://replicate.com/)

### Gaming

- [Crafter](https://danijar.com/project/crafter/)
- [TextWorldExpress](https://github.com/cognitiveailab/TextWorldExpress)
- [Fari](https://fari.app/)

## Goal Setting

- [80 days to get into FAANG](https://towardsdatascience.com/80-days-to-get-into-faang-5c77f27d5224)
- [Jack Dorsey's Don't do list](https://www.cnbc.com/2018/10/22/twitter-ceo-jack-dorsey-writes-a-wont-do-list-every-day.html)

## License

MIT © [headwinds](https://github.com/headwinds)
