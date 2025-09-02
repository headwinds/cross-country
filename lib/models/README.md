# Game Models Documentation

## Overview

This document explains the relationship between Quest and Encounter models in the Bellwoods Adventure game system.

## Quest vs Encounter: Understanding the Difference

### QuestModel
- **Purpose**: Tracks player progress and state through a quest
- **Contains**: Progress tracking, status, completion dates, player-specific data
- **Example**: "Player is 60% through the Mysterious Stranger encounter"
- **Dynamic**: Changes as player progresses

### EncounterModel  
- **Purpose**: Defines the content and structure of encounters
- **Contains**: Problems, rewards, descriptions, author info
- **Example**: "The Mysterious Stranger encounter has 1 decision problem and 2 rewards"
- **Static**: Content doesn't change, only player progress does

## How They Work Together

```
Story (Static Content)
├── Grid 1: Bellwoods
│   ├── Encounter: "Mysterious Stranger" (Static)
│   │   ├── Problems: [Decision Problem]
│   │   └── Rewards: [Mysterious Scroll]
│   └── Boss Battle: "Rat King" (Static)
│       ├── Problems: [Battle Problem]  
│       └── Rewards: [Rat King's Crown, Unlock Grid 2]
└── Grid 2: Light Woods
    └── ...

Player Progress (Dynamic State)
├── Quest 1: "Mysterious Stranger Quest" (Dynamic)
│   ├── encounter_id: "bellwoods-mysterious-stranger"
│   ├── grid_id: 1
│   ├── problems_completed: ["talk-to-stranger"]
│   ├── total_problems: 1
│   ├── progress: 100
│   └── status: "completed"
└── Quest 2: "Rat King Quest" (Dynamic)
    ├── encounter_id: "bellwoods-rat-king"
    ├── grid_id: 1
    ├── problems_completed: ["navigate-tunnels", "defeat-rat-king"]
    ├── total_problems: 3
    ├── progress: 67
    └── status: "in_progress"
```

## Key Relationships

### 1. One-to-One Mapping
- Each Quest links to one Encounter via `encounter_id`
- Each Encounter can have multiple Quests (different players)

### 2. Progress Tracking
- Quest tracks which problems are completed (`problems_completed`)
- Encounter defines what problems exist (`problems`)

### 3. Grid Progression
- Quest tracks which grid it belongs to (`grid_id`)
- Encounter belongs to a Grid in the story structure

## Usage Examples

### Creating a Quest from an Encounter
```typescript
function createQuestFromEncounter(encounter: EncounterModel, playerId: string): QuestModel {
  return {
    id: generateQuestId(),
    title: encounter.title,
    description: encounter.description,
    reward: encounter.rewards,
    giver: "Game System",
    receiver: playerId,
    encounter_id: encounter.encounter_id,
    grid_id: currentGridId,
    problems_completed: [],
    total_problems: encounter.problems.length,
    progress: 0,
    status: "not_started",
    started_at: new Date(),
    completed_at: new Date(),
    steps: encounter.problems.length,
    relatedTo: []
  };
}
```

### Updating Quest Progress
```typescript
function updateQuestProgress(quest: QuestModel, completedProblemId: string): QuestModel {
  const problemsCompleted = [...(quest.problems_completed || []), completedProblemId];
  const progress = Math.round((problemsCompleted.length / quest.total_problems!) * 100);
  
  return {
    ...quest,
    problems_completed: problemsCompleted,
    progress,
    status: progress === 100 ? "completed" : "in_progress"
  };
}
```

### Checking Quest Completion
```typescript
function isQuestCompleted(quest: QuestModel): boolean {
  return quest.problems_completed?.length === quest.total_problems;
}
```

## Benefits of This Design

### 1. Separation of Concerns
- **Content** (Encounters) is separate from **State** (Quests)
- Easy to modify encounter content without affecting player progress
- Easy to reset player progress without changing content

### 2. Reusability
- Same encounter can be used for multiple players
- Each player gets their own quest instance
- Encounters can be reused in different contexts

### 3. Flexibility
- Easy to add new encounter types
- Easy to modify quest tracking logic
- Easy to add new progress metrics

### 4. Scalability
- Encounters can be stored in JSON files
- Quests can be stored in database
- Easy to add multiplayer support

## Type Safety

Both TypeScript and Python models are provided for type safety:

- **TypeScript**: `cross-country/lib/models/GameModel.ts`
- **Python**: `scout/models/game_models.py`

The models are designed to be consistent across both languages, making it easy to share data between frontend and backend.
