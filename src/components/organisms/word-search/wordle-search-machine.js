import { Machine, assign, spawn, send } from 'xstate';
import { createSubWordleSearchMachine } from './sub-wordle-search-machine';

export const wordleSearchMachine = Machine({
  id: 'reddit',
  initial: 'idle',
  context: {
    wordleServices: {}, // stores the results of each subreddit response
    wordleService: null,
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

        let wordleService = context.wordleServices[event.name];

        if (wordleService) {
          return {
            ...context,
            wordleService,
          };
        }

        // Otherwise, spawn a new subreddit actor and
        // save it in the subreddits object
        wordleService = spawn(createSubWordleSearchMachine(event.name));

        return {
          wordleServices: {
            ...context.wordleServices,
            [event.name]: wordleService,
          },
          wordleService,
        };
      }),
    },
    FOUND_WORD: {},
  },
});
