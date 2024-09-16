import { Record } from 'immutable';

const QuestModel = Record({
  id: 0,
  title: 'generic item',
  description: 'health',
  reward: [],
  giver: 'quest giver',
  receiver: '',
  relatedTo: [],
  started_at: new Date(),
  completed_at: new Date(),
  status: 'none',
  progress: 0,
  steps: 1,
});

export default QuestModel;
