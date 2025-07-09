# Speech Management System

This document explains the enhanced speech system that positions speech bubbles near actors and provides navigation controls for managing multiple speech objects.

## Overview

The speech system allows you to:
- Position speech bubbles near speaking actors
- Manage multiple speech objects in a script
- Navigate through speech with Next/Prev controls
- Auto-play through speech sequences
- Track progress through the script

## Components

### StageWithSpeech

The main component that combines actors, speech positioning, and controls.

```typescript
import StageWithSpeech from "@/lib/components/organisms/stage/stage-with-speech";

<StageWithSpeech
  actorModels={actors}
  actorSpeech={speechScript}
  showControls={true}
  autoPlay={false}
/>
```

### SpeechControls

Navigation controls for managing speech progression.

```typescript
import SpeechControls from "@/lib/components/organisms/speech-controls/speech-controls";

<SpeechControls
  currentIndex={0}
  totalSpeeches={5}
  onNext={handleNext}
  onPrev={handlePrev}
  onPlay={handlePlay}
  onPause={handlePause}
  isPlaying={false}
/>
```

### ActorSpeech

Enhanced speech bubble component with positioning.

```typescript
import ActorSpeech from "@/lib/components/organisms/actors/actor-speech/actor-speech";

<ActorSpeech
  speech={currentSpeech}
  position={{ x: 100, y: 50 }}
  isVisible={true}
/>
```

## Usage Examples

### Basic Speech Script

```typescript
import { createSpeechScript } from "@/lib/utils/speech-util";

const speechScript = createSpeechScript([
  {
    messageId: "greeting",
    actorModel: hunterActor,
    name: "Hunter",
    text: "Hello, friend!",
  },
  {
    messageId: "response",
    actorModel: warriorActor,
    name: "Warrior", 
    text: "Greetings, hunter!",
  },
]);
```

### Conversation Between Actors

```typescript
import { createConversation } from "@/lib/utils/speech-util";

const conversation = createConversation(actors, [
  { actorName: "Hunter", text: "The forest is quiet today." },
  { actorName: "Warrior", text: "I sense danger ahead." },
  { actorName: "Wisp", text: "Ancient magic flows through these woods." },
]);
```

### Monologue for Single Actor

```typescript
import { createMonologue } from "@/lib/utils/speech-util";

const monologue = createMonologue(hunterActor, [
  "I've traveled these lands for many years.",
  "Seen things that would make your blood run cold.",
  "But nothing prepared me for what we face today.",
]);
```

## Speech Positioning

Speech bubbles are automatically positioned near the speaking actor:

- **Above and to the right** of the actor by default
- **Adjusts based on actor position** (grid or pixel coordinates)
- **Responsive to grid configuration** changes
- **High z-index** to appear above other elements

### Custom Positioning

You can override the default positioning:

```typescript
const speechPosition = {
  x: actorPosition.x + 80, // Custom offset
  y: actorPosition.y - 60, // Custom offset
};
```

## Speech Management Features

### Navigation Controls

- **Prev/Next buttons** to navigate through speech
- **Play/Pause** for auto-advancement
- **Progress counter** showing current position
- **Disabled states** for first/last speech

### Auto-Play Functionality

- **Automatic advancement** every 3 seconds when playing
- **Stops at end** of speech sequence
- **Manual override** with pause button
- **Configurable timing** (currently 3 seconds)

### Script Validation

```typescript
import { validateSpeechScript } from "@/lib/utils/speech-util";

const validation = validateSpeechScript(speechScript);
if (!validation.isValid) {
  console.error("Speech script errors:", validation.errors);
}
```

## Props Reference

### StageWithSpeech Props

```typescript
interface StageWithSpeechProps {
  config?: StageConfig;
  actorModels?: ActorModel[];
  actorSpeech?: ActorSpeechModel[];
  gridConfig?: GridConfig;
  showControls?: boolean;    // Show navigation controls
  autoPlay?: boolean;        // Start auto-play immediately
}
```

### SpeechControls Props

```typescript
interface SpeechControlsProps {
  currentIndex: number;      // Current speech index
  totalSpeeches: number;     // Total number of speeches
  onNext: () => void;        // Next speech handler
  onPrev: () => void;        // Previous speech handler
  onPlay?: () => void;       // Play handler
  onPause?: () => void;      // Pause handler
  isPlaying?: boolean;       // Current play state
  disabled?: boolean;        // Disable all controls
}
```

### ActorSpeech Props

```typescript
interface ActorSpeechProps {
  speech?: ActorSpeechModel;           // Speech object
  position?: { x: number; y: number }; // Custom position
  isVisible?: boolean;                 // Show/hide speech bubble
}
```

## ActorSpeechModel Structure

```typescript
interface ActorSpeechModel {
  messageId: string;                    // Unique identifier
  values?: Record<string, string | number>; // Interpolation values
  actorModel: ActorModel;               // Associated actor
  name: string;                         // Speaker name
  text: string;                         // Speech text
}
```

## Integration with Grid Positioning

The speech system works seamlessly with the grid positioning system:

1. **Actor positioning** using grid coordinates
2. **Automatic conversion** to pixel positions for speech bubbles
3. **Responsive positioning** when grid configuration changes
4. **Consistent spacing** regardless of tile size

## Best Practices

### Script Organization

- Use descriptive `messageId` values for internationalization
- Group related speeches together in arrays
- Validate scripts before use
- Use consistent naming conventions

### Performance

- Memoize speech scripts when possible
- Avoid creating new speech objects on every render
- Use stable references for actor models

### Accessibility

- Provide meaningful speech text
- Consider screen reader compatibility
- Use appropriate contrast for speech bubbles

## Examples

See `StageSpeechStory` component for comprehensive examples demonstrating:

- Multiple actors with grid positioning
- Complex speech scripts
- Auto-play functionality
- Navigation controls
- Different display modes 