## Generate Component

```
npm run new -- --type organisms --path /component-name-here
```
or
```
npm run new -- --type molecules --path /component-name-here/sub-component-name-her
```

This will automatically scaffold the component directory creating all the files you will need including the tests and stories folders. It saved you at least 5 minutes if not especially around configuring the story; no more frustrating CSF errors!


## Generate Stories

Sometimes one may wish to start manually to create folder and add the story files later.

```
npm run new:story -- --type atomic --path /path/here
```

So If I want to create a story in the carbon folder within worlds which is in organisms.

```
npm run new:story -- --type organisms --path /worlds/carbon
```

