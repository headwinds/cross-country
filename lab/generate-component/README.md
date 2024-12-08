

## Generate Stories

```
npm run new:story -- --type atomic --path path/here
```

So If I want to create a story in the carbon folder within worlds which is in organisms.

```
npm run new:story -- --type organisms --path worlds/carbon
```

Why didn't I just go:

```
npm run new:story -- --path organisms/worlds/carbon
```

Because I did not think of that until just now


## The following does not currently work!

## Generate Component

Only support one word components name like Box.

```
npm new box moleculues
```

It will take of properly capitalizing the first letter in the component name.

## Multiple Word Components

It also creates components with multiple words like GoldLeafEditor.

```
npm new gold-leaf-editor molecules
```

It detects the "-" in the string to produce GoldLeafEditor as well as respects the file name convention as golf-leaf-view and story name as gold leaf view
