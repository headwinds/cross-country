export interface QuestModel {
  id: number;
  title: string;
  description: string;
  reward: any[];
  giver: string;
  receiver: string;
  relatedTo: any[];
  started_at: Date;
  completed_at: Date;
  status: string;
  progress: number;
  steps: number;
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
};
