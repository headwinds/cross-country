# Stage Modding Guide

Welcome to the Cross Country Stage component - your gateway to creating immersive 2D tile-based RPG experiences! 🎮

## Vision: Your Stories, Your Worlds

The Stage component is designed with one core belief: **every developer has stories worth telling**. Whether you're recreating epic battles from your favorite sci-fi universe, building a cozy simulation of pioneer life, or crafting the perfect coffee shop atmosphere, this component gives you the tools to bring those visions to life.

## What Makes This Special?

This isn't just another game component - it's a **narrative playground** that bridges the gap between imagination and implementation. Think of it as:

- **Ultima meets Modern Web**: Classical 2D RPG mechanics with modern React patterns
- **Stardew Valley Flexibility**: Create anything from bustling marketplaces to serene farmlands
- **Prototype for Bigger Dreams**: Perfect for planning 3D worlds, VR experiences, or full games

## Endless Possibilities

### 🚀 Sci-Fi Adventures
- Recreate the opening battle of Hoth with snow tiles and AT-AT walkers
- Build a space station with crew management and resource allocation
- Design alien planets with unique ecosystems and creatures

### 🏕️ Historical Simulations  
- Pioneer outpost during the California Gold Rush
- Medieval villages with blacksmiths, taverns, and markets
- Wild West towns complete with saloons and sheriff offices

### 🏙️ Modern Life
- Brooklyn coffee shop with daily customer patterns
- University campus with student interactions
- Corporate office dynamics and workplace stories

### 🏰 Fantasy Realms
- Magical academies with spell-casting students
- Dragon lairs with treasure and danger
- Peaceful elven villages in enchanted forests

## Why 2D? Why Limitations Are Good

Embracing 2D constraints actually **amplifies creativity**:

- **Focus on Story**: Without complex 3D mechanics, you concentrate on narrative and character development
- **Rapid Prototyping**: Test game mechanics and story beats quickly
- **Universal Understanding**: 2D tile-based games are immediately familiar to players
- **Perfect Planning Tool**: Use your 2D creation as a blueprint for future 3D or VR adaptations

## Getting Started with Modding

### Simple 4-Prop API
```tsx
import { Stage } from '@headwinds/cross-country';

<Stage 
  actorSpeech={myStoryScript}      // The dialogue and narrative
  actorModels={myCharacters}       // The actors in your scene
  currentGameState="checkpoint_1"  // Save/load game state
  stageConfig={{                   // Visual configuration
    useImageTiles: true,
    tileTheme: "coffeeShop",
    customStyle: { backgroundColor: "#8B4513" }
  }}
/>
```

### 1. Writing Your Story (`actorSpeech`)
Create branching narratives with state management:
```tsx
const myStoryScript = [
  { 
    messageId: "intro", 
    name: "sarah", 
    text: "Welcome to Brooklyn Brew! What can I get you?" 
  },
  { 
    messageId: "order_taken", 
    name: "customer", 
    text: "I'll take a cappuccino and your Wi-Fi password." 
  },
  // ... continue your story
];
```

### 2. Creating Actors (`actorModels`)
Design unique characters for your world:
```tsx
const myCharacters = [
  {
    id: 1,
    type: "npc",
    alignment: "neutral",
    name: "Barista Sarah",
    variant: "barista",
    position: { x: 2, y: 1, z: 0 },
  }
];
```

### 3. Building Environments (`stageConfig`)
Replace placeholder tiles with rich visuals:
- **PNG/JPG**: Photorealistic environments
- **SVG**: Scalable, crisp graphics that resize beautifully  
- **Custom Tiles**: Complete control over every tile
- **Mixed Media**: Combine different formats for optimal results

## Technical Flexibility

### Four-Prop Simplicity
The Stage component uses just 4 clean props for maximum flexibility:
- **`actorSpeech`**: Your story script with dialogue and narrative
- **`actorModels`**: Characters and entities in your scene  
- **`gridConfig`**: Layout and positioning configuration
- **`stageConfig`**: Visual styling and tile configuration (optional)

This separation allows developers to work on each aspect independently!

### Grid-Based Positioning
- Automatic pixel conversion from grid coordinates
- Responsive layouts that work on any screen size
- Easy snapping and alignment

### Asset Management
- Support for multiple image formats (JPG, PNG, SVG, WebP)
- Dynamic asset loading with built-in fallbacks
- Performance optimization for larger worlds

### Game State Management
- **`currentGameState`**: Save/load game progression by ID
- Resume stories at any checkpoint
- Perfect for building persistent game experiences

### Actor Positioning
- **Configurable placement**: Fine-tune how actors sit on tiles
- **Bottom margin control**: Actors can sit ON tiles, not below them
- **Height awareness**: Supports different actor sizes
- **Visual effects**: Create floating, grounded, or dramatic positioning

## Community & Contribution

We believe the best modding communities form when tools are:
- **Accessible**: Easy to understand and modify
- **Powerful**: Capable of handling complex scenarios
- **Extensible**: Open to new features and improvements

### How You Can Help
1. **Build Something Amazing**: Create your dream scenario
2. **Share Your Work**: Show the community what's possible
3. **Report Limitations**: Help us understand what's missing
4. **Contribute Code**: Submit PRs for features you need

### Getting Your Mods Featured
We love showcasing creative uses of the Stage component! If you build something interesting:
- Share screenshots or videos
- Document your creative process
- Consider open-sourcing your scenarios

## Examples to Inspire You

### "The Last Outpost" (Western Theme)
A frontier town where players manage resources, negotiate with traders, and defend against bandits.

### "Café Chronicles" (Slice of Life)
A Brooklyn coffee shop where every customer has a story, and player choices affect the neighborhood.

### "Academy of Elements" (Fantasy Education)
A magical school where students learn spells, form friendships, and uncover ancient mysteries.

### "Mars Colony Alpha" (Sci-Fi Survival)
Manage a struggling Mars colony with limited resources and mysterious phenomena.

## Philosophy: Limitations Breed Innovation

The Stage component embraces constraints not as restrictions, but as **creative catalysts**. When you can't rely on photorealistic 3D graphics or complex physics, you're forced to focus on what really matters:

- **Character Development**: Who are your actors and what drives them?
- **Environmental Storytelling**: What does each tile reveal about your world?
- **Player Agency**: How do choices impact the narrative?
- **Emotional Resonance**: What feelings does your world evoke?

## Ready to Start Building?

The Stage component is waiting for your creativity. Whether you're prototyping the next indie hit or just exploring a story idea, remember: **every epic adventure starts with a single tile**.

Start small, think big, and let your imagination run wild. The 2D canvas is yours to fill! 🎨

---

*"The best way to predict the future is to invent it." - Alan Kay*

*"The best way to invent it is to prototype it." - The Cross Country Team*