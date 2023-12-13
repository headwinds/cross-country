import { Record } from 'immutable';
// import QuestModel from "./QuestModel";

const ChapterModel = Record({
  title: 'Chapter 1',
  actorSet: [],
  playerSet: [],
  itemSet: [],
  enemySet: [],
  neutralSet: [],
  npcSet: [],
  shieldSet: [],
  weaponSet: [],
  questSet: [],
  started_at: new Date(),
  completed_at: new Date(),
  progress: 0,
  steps: 1,
  number: 0,
});

export default ChapterModel;
