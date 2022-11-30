import { Machine, assign, spawn, send } from 'xstate';
import { createSubWordSearchMachine } from './sub-word-search-machine';

export const wordSearchMachine = Machine({
  id: 'reddit',
  initial: 'idle',
  context: {
    subredditServices: {}, // stores the results of each subreddit response
    subredditService: null,
  },
  // 3 states: idle, search, and found
  states: {
    idle: {
      entry: send({ type: 'SEARCH_FOR_WORD' }),
    },
    wordSearch: {},
    wordFound: {},
  },
  on: {
    SEARCH_FOR_WORD: {
      target: '.wordSearch', // the dot means its relative child state node https://xstate.js.org/docs/guides/ids.html
      actions: assign((context, event) => {
        // Use the existing subreddit actor if one doesn't exist
        console.log('wordSearchMachine -> event', event);

        let subredditService = context.subredditServices[event.name];

        if (subredditService) {
          return {
            ...context,
            subredditService,
          };
        }

        // Otherwise, spawn a new subreddit actor and
        // save it in the subreddits object
        subredditService = spawn(createSubWordSearchMachine(event.name));

        return {
          subredditServices: {
            ...context.subredditServices,
            [event.name]: subredditService,
          },
          subredditService,
        };
      }),
    },
    FOUND_WORD: {

    },
  },
});
