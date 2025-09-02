import { RewardModel } from "./GameModel";

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
