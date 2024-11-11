import { createMachine, assign } from 'xstate';

/*
Giant Soup
states:
- guest
-- first name
- authenticated user
-- first name
-- last name
-- username
-- password
-- email
-- social login (facebook, google, etc) 
events:
- validate sentence 
- save sentence
*/

const machine = {
  predictableActionArguments: true,
  id: 'giantSoup',
  initial: 'idle',
  context: {
    sentence: '',
    ai: {
      status: 'idle',
    },
    isSentenceValid: false,
  },
  states: {
    idle: {
      on: {
        TYPING_SENTENCE: {
          actions: 'typingSentence',
        },
        SUBMIT: 'submitting',
      },
    },
    aiReviewing: {
      on: {
        AI_REVIEW: {
          actions: 'aiReview',
        },
      },
    },
    submitting: {
      entry: 'logSentence',
    },
    validate: {},
  },
};

const config = {
  actions: {
    typingSentence: assign((ctx, e) => ({ sentence: e.value })),
    aiReview: assign((ctx, e) => ({ ai: e.value })),
    logSentence: (ctx, e) => console.log('Giant Soup Machine sentence: ', ctx.sentence),
  },
  activities: {
    /* ... */
  },
  delays: {
    /* ... */
  },
  guards: {
    /* ... */
  },
  services: {
    /* ... */
  },
};

export const giantSoupMachine = createMachine(machine, config);
