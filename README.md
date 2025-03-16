# cross-country

> an atomic react component library for personal metrics, simulations, and solo forest bathers

[![NPM](https://img.shields.io/npm/v/cross-country.svg)](https://www.npmjs.com/package/cross-country) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Core Tech

- React (18.02), react-spring & react-hook-form
- CSS modules & Tailwind CSS compatible
- D3
- Storybook 8
- Typescript 5
- Vite

Do you pour over your personal stats from Github, Strava or Spotify? Is your year always in review?! By experimenting with code, you can hone your developer skills while exploring subject matter that interests you.

[storybook](https://cross-country-guide.vercel.app/)

### Install

```
pnpm i cross-country
```

### Types

All types are included in the library.

### Use

```
import { Column, Row, Paragraph, Table, Chart, Bento } from "cross-country"
```

### NextJS Support

For this third-party library to work within NextJS, there is one change required to import it's single css bundle.

#### Import Styles - New App Strategy

Edit the app\layout.tsx file to:

```
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "cross-country/dist/bundle.css";
import { ScoutProviders } from "./providers/providers";
```

#### Import Styles - Old Pages Strategy

Edit the pages\_app.js file to:

```
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "cross-country/dist/bundle.css";
import { GoogleAnalytics } from "@next/third-parties/google";
```

### Import Styles - Storybook Support

If you use this library in your Storybook, update the .storybook/preview.tsx file 

```
import type { Preview } from "@storybook/react";
import { initialize, mswLoader } from "msw-storybook-addon";
import "cross-country/dist/bundle.css";
```

I also recommend the [mock service mocker addon](https://github.com/mswjs/msw-storybook-addon) to simulate data fetching in storybook which works very well with React hooks; similar to how we can intercept and mock response data with jest or vitest. 

### Tailwind CSS Support

Each component provides a `customClass` property where you can supply your own tailwind css classes.

### Example Page

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

## Server Side Rendering

Part of my [dogfooding](https://uxinsight.org/dogfooding-a-powerful-addition-to-the-user-research-toolkit/) process is to use my library on my own site, [headwinds](https://headwinds.vercel.app).

Initially, I ran into a build error where I had to account for every `window` and `document` ensuring that they are not referenced until the UI hits the client. After hunting through my webpack build file, I was ble to eliminate them all, and it now works 100% server side!

## Automated Component Creation

```
pnpm new -- --type organisms --path component-name-here
```
or
```
pnpm new -- --type molecules --path component-name-here/sub-component-name-here
```

You can also scaffold only a story:
```
pnpm new:story -- --type molecules --path policies/privacy-policy
```

This will automatically scaffold the component directory creating all the files you will need including the tests and stories folders. It saved you at least 5 minutes if not especially around configuring the story; no more frustrating CSF errors!

## Unsplash Config

Before installing, create a cross-country-config-private.js file in your root directory by copying the cross-country-config.js and renaming it.

```
export const privateConfig = {
  UNSPLASH_API_KEY: 'YOUR-UNSPLASH-KEY',
};
```

## Storybook

While creating components, you can use Storybook

```
pnpm storybook
```

Open your browser to http://localhost:6006/

## Build the Static Site for Storybook

After running `npm run build-storybook`, I had to make one change to the iframe.html file in the storybook-static folder.

The bundle.css isn't added so I had to add it manually.

```
  <link rel="stylesheet" href="./bundle.css" />
```

## Before Publishing Check Types

```
npx tsc --noEmit
```

Run [changesets](https://github.com/changesets/changesets)

```
npx changeset
npx changeset version
pnpm publish
```

Need to run both commands `npx changeset` only creates the changeset while `npx changeset version` will then update the package.json

## Unit Tests

This library uses Jest & React Testing Library for unit tests.

```
pnpm test
```

## Publish to NPM

```
pnpm publish
```

```
pnpm login
your-username-not-your-email
your-password
now-your-email
pnpm publish
```

## Deploy to Vercel

```
pnpm build-storybook
cd storybook-static
vercel --prod
```

## Wiki

- [cross country wiki](https://github.com/headwinds/cross-country/wiki)

## License

MIT © [headwinds](https://github.com/headwinds)
