// Core Game Types for Bellwoods Adventure

// ============================================================================
// REWARD SYSTEM
// ============================================================================

export interface RewardModel {
  reward_id: string;
  title: string;
  description: string;
  author_id: string;
  created_at: string;
  credits: number;
  experience: number;
}

export const defaultRewardModel: RewardModel = {
  reward_id: "",
  title: "",
  description: "",
  author_id: "",
  created_at: new Date().toISOString(),
  credits: 0,
  experience: 0,
};

// ============================================================================
// PROBLEM SYSTEM
// ============================================================================

export interface MonsterModel {
  name: string;
  health: number;
  max_health: number;
  attack: number;
  defense: number;
  abilities: string[];
}

export const defaultMonsterModel: MonsterModel = {
  name: "",
  health: 0,
  max_health: 0,
  attack: 0,
  defense: 0,
  abilities: [],
};

export interface BattleModel {
  type: "battle";
  problem_id: string;
  title: string;
  description: string;
  monster: MonsterModel;
  player_health: number;
  player_max_health: number;
  turn_order: "player_first" | "monster_first" | "random";
  victory_conditions: string[];
  defeat_conditions: string[];
}

export const defaultBattleModel: BattleModel = {
  type: "battle",
  problem_id: "",
  title: "",
  description: "",
  monster: defaultMonsterModel,
  player_health: 0,
  player_max_health: 0,
  turn_order: "player_first",
  victory_conditions: [],
  defeat_conditions: [],
};

export interface DecisionOptionModel {
  option_id: string;
  text: string;
  consequences: string;
  required_items?: string[];
  required_skills?: string[];
}

export const defaultDecisionOptionModel: DecisionOptionModel = {
  option_id: "",
  text: "",
  consequences: "",
  required_items: [],
  required_skills: [],
};

export interface DecisionModel {
  type: "decision";
  problem_id: string;
  title: string;
  description: string;
  options: DecisionOptionModel[];
  time_limit?: number; // seconds, optional
}

export const defaultDecisionModel: DecisionModel = {
  type: "decision",
  problem_id: "",
  title: "",
  description: "",
  options: [],
  time_limit: undefined,
};

export type ProblemModel = BattleModel | DecisionModel;

// ============================================================================
// ENCOUNTER SYSTEM
// ============================================================================

export interface EncounterModel {
  encounter_id: string;
  title: string;
  description: string;
  rewards: RewardModel[];
  problems: ProblemModel[];
  author_id: string;
  created_at: string;
}

export const defaultEncounterModel: EncounterModel = {
  encounter_id: "",
  title: "",
  description: "",
  rewards: [],
  problems: [],
  author_id: "",
  created_at: new Date().toISOString(),
};

// ============================================================================
// GRID SYSTEM
// ============================================================================

export interface GridModel {
  grid_id: number;
  title: string;
  description: string;
  intro: string;
  encounters: EncounterModel[];
  boss_battle: EncounterModel;
}

export const defaultGridModel: GridModel = {
  grid_id: 0,
  title: "",
  description: "",
  intro: "",
  encounters: [],
  boss_battle: defaultEncounterModel,
};

// ============================================================================
// STORY SYSTEM
// ============================================================================

export interface StoryModel {
  title: string;
  description: string;
  author_id: string;
  created_at: string;
  updated_at: string;
  grids: GridModel[];
}

export const defaultStoryModel: StoryModel = {
  title: "",
  description: "",
  author_id: "",
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  grids: [],
};

// ============================================================================
// ENHANCED QUEST MODEL (Updated to work with new system)
// ============================================================================

export interface QuestModel {
  id: number;
  title: string;
  description: string;
  reward: RewardModel[];
  giver: string;
  receiver: string;
  relatedTo: any[];
  started_at: Date;
  completed_at: Date;
  status: string;
  progress: number;
  steps: number;

  // New fields to integrate with encounter system
  encounter_id?: string; // Links to specific encounter
  grid_id?: number; // Which grid this quest belongs to
  problems_completed?: string[]; // Track which problems are completed
  total_problems?: number; // Total problems in the encounter
}

export const defaultQuestModel: QuestModel = {
  id: 0,
  title: "generic item",
  description: "health",
  reward: [],
  giver: "quest giver",
  receiver: "",
  relatedTo: [],
  started_at: new Date(),
  completed_at: new Date(),
  status: "none",
  progress: 0,
  steps: 1,
  encounter_id: undefined,
  grid_id: undefined,
  problems_completed: [],
  total_problems: 0,
};

// ============================================================================
// BATTLE SYSTEM TYPES
// ============================================================================

export interface BattleTurnModel {
  turn_number: number;
  attacker: "player" | "monster";
  action: string;
  damage_dealt: number;
  health_remaining: {
    player: number;
    monster: number;
  };
  effects_applied: string[];
}

export const defaultBattleTurnModel: BattleTurnModel = {
  turn_number: 0,
  attacker: "player",
  action: "",
  damage_dealt: 0,
  health_remaining: {
    player: 0,
    monster: 0,
  },
  effects_applied: [],
};

export interface BattleStateModel {
  is_active: boolean;
  current_turn: number;
  player_health: number;
  monster_health: number;
  turn_history: BattleTurnModel[];
  victory_achieved: boolean;
  defeat_occurred: boolean;
}

export const defaultBattleStateModel: BattleStateModel = {
  is_active: false,
  current_turn: 0,
  player_health: 0,
  monster_health: 0,
  turn_history: [],
  victory_achieved: false,
  defeat_occurred: false,
};

// ============================================================================
// DECISION SYSTEM TYPES
// ============================================================================

export interface DecisionChoiceModel {
  choice_id: string;
  option_id: string;
  selected_at: string;
  consequences_applied: string[];
  skills_used: string[];
}

export const defaultDecisionChoiceModel: DecisionChoiceModel = {
  choice_id: "",
  option_id: "",
  selected_at: new Date().toISOString(),
  consequences_applied: [],
  skills_used: [],
};

export interface DecisionStateModel {
  problem_id: string;
  choices_made: DecisionChoiceModel[];
  time_remaining?: number;
  completed: boolean;
}

export const defaultDecisionStateModel: DecisionStateModel = {
  problem_id: "",
  choices_made: [],
  time_remaining: undefined,
  completed: false,
};

// ============================================================================
// PLAYER SKILLS SYSTEM
// ============================================================================

export interface PlayerSkillModel {
  skill_id: string;
  name: string;
  description: string;
  level: number;
  max_level: number;
  experience: number;
  experience_to_next: number;
}

export const defaultPlayerSkillModel: PlayerSkillModel = {
  skill_id: "",
  name: "",
  description: "",
  level: 1,
  max_level: 10,
  experience: 0,
  experience_to_next: 100,
};

// ============================================================================
// GAME STATE TYPES
// ============================================================================

export interface GameStateModel {
  current_grid_id: number;
  current_encounter_id?: string;
  current_problem_id?: string;
  player_skills: PlayerSkillModel[];
  battle_state?: BattleStateModel;
  decision_state?: DecisionStateModel;
  completed_encounters: string[];
  unlocked_grids: number[];
}

export const defaultGameStateModel: GameStateModel = {
  current_grid_id: 1,
  current_encounter_id: undefined,
  current_problem_id: undefined,
  player_skills: [],
  battle_state: undefined,
  decision_state: undefined,
  completed_encounters: [],
  unlocked_grids: [1], // Start with first grid unlocked
};

// ============================================================================
// TYPE GUARDS
// ============================================================================

export function isBattleProblem(problem: ProblemModel): problem is BattleModel {
  return problem.type === "battle";
}

export function isDecisionProblem(
  problem: ProblemModel
): problem is DecisionModel {
  return problem.type === "decision";
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

export function calculateQuestProgress(quest: QuestModel): number {
  if (quest.total_problems === 0) return 0;
  return Math.round(
    ((quest.problems_completed?.length || 0) / quest.total_problems) * 100
  );
}

export function isQuestCompleted(quest: QuestModel): boolean {
  return quest.problems_completed?.length === quest.total_problems;
}

export function canAccessOption(
  option: DecisionOptionModel,
  playerSkills: PlayerSkillModel[]
): boolean {
  if (!option.required_skills || option.required_skills.length === 0)
    return true;

  const playerSkillNames = playerSkills.map((skill) => skill.name);
  return option.required_skills.every((skill) =>
    playerSkillNames.includes(skill)
  );
}
