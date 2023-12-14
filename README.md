# cross-country

> an atomic react design system for personal metrics

[![NPM](https://img.shields.io/npm/v/cross-country.svg)](https://www.npmjs.com/package/cross-country) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Core Tech

- React (18.02) & react-spring
- CSS modules
- D3
- Storybook 7
- Typescript 5
- Vite 

Do you pour over your personal stats from Github, Strava or Spotify? Is your year always in review?! By experimenting with code, you can hone your developer skills while exploring subject matter that interests you. 

In my case, I'm using this library to present metrics about my path as a developer as well as my home energy efficiency and [decarbonization](https://greenbuildingcanada.ca/decarbonize-home/).  

### Note about NextJS

After upgrading to Vite, this library currently does not work with NextJS due to the way it imports its CSS. I'm currently [exploring different approaches](https://dev.to/headwinds/comment/2bel0) but for now I would recommend using this library within [Vite react starter](https://vitejs.dev/guide/), and you can use an [earlier build like 1.1.85](https://www.npmjs.com/package/cross-country/v/1.1.85) before the Vite migration that does work with NextJS.  

By wrapping html, each component is augmented for building accessible experiences across screens. A simple page may look like this:

```
<Wrapper>
  <Page>
    <Column>
      <Paragraph>
       Hello! I'm a developer with a mix of frontend and backend experience.
      </Paragraph>
      <Metrics keyValuePairs=[{label: "Frontend", value: 75, type: "percent"}, {label: "Backend", value: 25, type: "percent"}] />
    </Column>
  </Page>
  <Wallpaper />
</Wrapper>
```

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

Originally, I started with SCSS Module but "downgraded" to CSS to upgrade Node from 12 to 18 and am planning to invest in PostCSS and Tailwind.

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


## Publish to NPM

After you commit, make sure you have updated the version number before publishing usually `npm version patch`

```
npm login
your-username-not-your-email
your-password
now-your-email
npm publish
```

Since I had .npmrc setup in other projects, I had to one for this project [using the default](https://docs.npmjs.com/cli/v8/using-npm/registry). At first, I thought I needed /headwinds and then /headwinds/cross-country but nope! Just use the default - see my .npmrc file.

## Inspiration

- [Create a Component Library Fast🚀(using Vite's library mode)](https://dev.to/receter/how-to-create-a-react-component-library-using-vites-library-mode-4lma)
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
