/*
0. We find a spot, drink our favorite potion and dream up a focal point for our scene. 
1. We are prompted to create a scene and set the grid size. It defaults to a chessboard grid of 8x8 tiles.
2. We define stage within the scene. For instance, set 3x3 tiles as the stage and any tiles outside will be considered dark or in a fog. The edge of 3x3 tiles will be called the fringe. 
3. We place players and objects within the scene. Both player and objects can considered actors as they play a role in the scene.
4. We define the rules of the scene. For instance, we can define the rules of movement and interactions which begin and end the turn.
5. We play the scene, and tweak the rules as we go.  
6. Once content, we can either share the scene and/or move on to the next adventure.
*/

// Scene-specific types for the play-like narrative structure

export interface SceneDialogueModel {
  actor_id: string;
  line: string;
}

export interface SceneActionModel {
  type: "move" | "attack" | "spell" | "talk" | "interact";
  actor_id: string;
  description?: string;
  target_id?: string;
  position?: { x: number; y: number };
  parameters?: Record<string, any>;
}

export interface SceneTurnModel {
  turn_number: number;
  narration: string;
  dialogue: SceneDialogueModel[];
  actions: SceneActionModel[];
}

export interface SceneStoryModel {
  prologue: string;
  epilogue: string;
}

export interface ScenePlacedActor {
  actor_id: string;
  name: string;
  position: { x: number; y: number };
  role: "player" | "npc" | "enemy" | "neutral";
}

export interface ScenePlacedTile {
  tile_id: string;
  position: { x: number; y: number };
}

export interface SceneGridModel {
  width: number;
  height: number;
  tiles: ScenePlacedTile[];
}

export interface SceneStageModel {
  width: number;
  height: number;
  fringe: number;
}

export interface SceneRulesModel {
  max_turns: number;
  victory_conditions: string[];
  defeat_conditions: string[];
}

export interface SceneModel {
  id: number;
  title: string;
  slug: string;
  description: string;
  status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
  is_public: boolean;
  // Scene composition
  story: SceneStoryModel;
  grid: SceneGridModel;
  stage: SceneStageModel;
  placed_actors: ScenePlacedActor[];
  turns: SceneTurnModel[];
  rules: SceneRulesModel;
  // Metadata
  user_account_id: string;
  json?: Record<string, any>;
  published_json?: Record<string, any>;
  published_at?: string;
  created_at: string;
  updated_at?: string;
}

export const defaultSceneStory: SceneStoryModel = {
  prologue: "",
  epilogue: "",
};

export const defaultSceneGrid: SceneGridModel = {
  width: 8,
  height: 8,
  tiles: [],
};

export const defaultSceneStage: SceneStageModel = {
  width: 3,
  height: 3,
  fringe: 1,
};

export const defaultSceneRules: SceneRulesModel = {
  max_turns: 1,
  victory_conditions: [],
  defeat_conditions: [],
};

export const defaultSceneModel: SceneModel = {
  id: 0,
  title: "",
  slug: "",
  description: "",
  status: "DRAFT",
  is_public: false,
  story: defaultSceneStory,
  grid: defaultSceneGrid,
  stage: defaultSceneStage,
  placed_actors: [],
  turns: [],
  rules: defaultSceneRules,
  user_account_id: "",
  created_at: new Date().toISOString(),
};
