export interface QuestStepModel {
  instruction: string;
  action: string;
  complete: boolean;
}

export const defaultQuestStepModel: QuestStepModel = {
  instruction: '',
  action: '',
  complete: false,
};
