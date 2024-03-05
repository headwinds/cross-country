# Lab

the generate component automation is currently broken to due to the upgrage. It was interesting when it worked but may not be worth fixing since I tend not to use it anyways but can't quite delete it just yet.

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


