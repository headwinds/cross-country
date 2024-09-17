# cross-country

> an atomic react components for personal metrics and creating courses

[![NPM](https://img.shields.io/npm/v/cross-country.svg)](https://www.npmjs.com/package/cross-country) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Core Tech

- React (18.02), react-spring & react-hook-form
- CSS modules & Tailwind CSS compatible
- D3
- Storybook 7
- Typescript 5
- Vite

Do you pour over your personal stats from Github, Strava or Spotify? Is your year always in review?! By experimenting with code, you can hone your developer skills while exploring subject matter that interests you.

[storybook](https://cross-country-storybook.vercel.app/)

### Install

```
npm install cross-country
```

### Use

```
import { Column, Row, Paragraph, Table, Chart } from "cross-country"
```

### NextJS Support

For this third-party library to work within NextJS, there is one change required to import it's single css bundle.

Edit the \_app.js file to:

```
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "cross-country/dist/bundle.css";
import { GoogleAnalytics } from "@next/third-parties/google";
```

### Tailwind CSS Support

Each component provides a `customClass` propertity where you can supply your own tailwind css classes.

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

Part of my dogfooding process is to use my library on my own site, [headwinds](https://headwinds.vercel.app).

Initially, I ran into a build error where I had to account for every `window` and `document` ensuring that they are not referenced until the UI hits the client. After hunting through my webpack build file, I was ble to eliminate them all, and it now works 100% server side!

## Unsplash Config

Before installing, create a cross-country-config-private.js file in your root directory by copying the cross-country-config.js and renaming it.

```
export const privateConfig = {
  UNSPLASH_API_KEY: 'YOUR-UNSPLASH-KEY',
};
```

## Storybook

While creating compoents, you can use Storybook

```
npm run storybook
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

## Publish to NPM

Update the version number before publishing via `npm version patch`

```
npm login
your-username-not-your-email
your-password
now-your-email
npm publish
```

## Wiki

- [cross country wiki](https://github.com/headwinds/cross-country/wiki)

## License

MIT © [headwinds](https://github.com/headwinds)
