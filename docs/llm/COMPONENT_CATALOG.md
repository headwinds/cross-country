# Cross-country Component Catalog

This file is a fast discovery map for humans and LLMs.

## How to Use This Catalog

1. Start with `lib/components/index.ts` and `lib/index.ts`.
2. Pick the component family below.
3. Confirm exact exports in that family's `index.ts` barrel.
4. Check local README or stories when available.

## Package Entry Points

- `lib/index.ts` exports components, utils, models, providers
- `lib/components/index.ts` exports atoms, molecules, organisms, templates, pages
- `lib/models/index.ts` exports all shared model types

## Atoms (`lib/components/atoms/index.ts`)

Core layout and UI primitives.

- Layout: `Column`, `Row`, `Grid`
- Text: `Headline`, `SubHeadline`, `Paragraph`, `Span`, `Label`, `Bold`, `Hilight`
- Inputs: `Form`, `TextInput`, `TextArea`, `Select`, `Checkbox`, `Radio`, `Button`
- Data display: `Table`, `TableHead`, `TableBody`, `TableRow`, `TableData`, `List`, `ListItem`
- Media/graphics: `Image`, `SVG`, `Circle`, `Group`
- Utility visuals: `AnimateNumber`, `ScrambleText`, `HorizontalLine`, `Link`
- Branding: `HeadwindsLogo`, `CrossCountryLogo`

## Molecules (`lib/components/molecules/index.ts`)

Composed UI blocks and interaction patterns.

- Structure and presentation: `Wrapper`, `Wallpaper`, `Tile`, `Card`, `Modal`, `Stagger`
- Feedback and status: `Loading`, `Error`
- User and auth-adjacent: `User`, `CheckboxLabel`, `LabelInput`
- Data and visuals: `KeyValuePairs`, `Carousel`, `VennDiagram`, `RelatedArticles`, `Keywords`
- Policies: `PrivacyPolicy`, `TermsOfUse`

## Organisms (`lib/components/organisms/index.ts`)

Large feature components and domain modules.

- Content/product: `Bento`, `Listicle`, `Chart`, `Metrics`, `Masonry`
- Account: `Login`, `Registration`
- Navigation/content trees: `Branch`, `Branches`
- Game domain: `Actor`, `Stage`, `Hunter`, `Warrior`, `Cleric`, `Wizard`, `Wisp`, `TileGrid`, `JsonMapTileGrid`, `Player`
- Effects/animation: `ReverseTextAnimation`

## Templates (`lib/components/templates/index.ts`)

- `HomeTemplate`
- `HeadwindsHomeTemplate`
- `ArticleTemplate`

## Pages (`lib/components/pages/index.ts`)

- `HeadwindsHomePage`
- `HomePage`

## Shared Models (`lib/models/index.ts`)

Shared type contracts for game/content/user data.

- Character/world core: `ActorModel`, `PlayerModel`, `EnemyModel`, `NPCModel`, `WorldModel`, `SceneModel`
- Progression/content: `QuestModel`, `QuestStepModel`, `ChapterModel`, `PageModel`, `BookModel`
- Inventory/combat: `ItemModel`, `WeaponModel`, `ShieldModel`, `SpellModel`
- Game-state family from `GameModel`: `GameStateModel`, `StoryModel`, `EncounterModel`, `BattleModel`, `DecisionModel` and related models

## High-Signal Local Docs

- `lib/models/README.md`
- `lib/components/pages/rpg/README.md`
- `lib/components/organisms/stage/README_STAGE_MODDING.md`
- `lib/components/organisms/stage/README_GRID_POSITIONING.md`
- `lib/components/organisms/stage/README_SPEECH_SYSTEM.md`
- `lib/components/organisms/clusters/README.md`
- `lib/components/organisms/listicle/README.md`

## Recommended Per-Component README Shape

For each component folder, include:

1. Purpose: one sentence on when to use it.
2. Import: exact import statement.
3. Props: compact table with required vs optional.
4. Example: smallest working usage snippet.
5. State/side effects: async calls, context dependencies, browser-only assumptions.
6. Related: links to sibling components and stories.

## Maintenance Rule

Whenever exports change in an `index.ts` barrel, update this file in the same pull request.