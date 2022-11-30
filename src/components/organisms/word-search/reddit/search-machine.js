// https://xstate.js.org/docs/guides/communication.html#invoking-promises
import { createMachine, assign, send, Machine } from 'xstate';

const getSearchResults = query => {
  const { subreddit } = query;

  return fetch(`https://www.reddit.com/r/${subreddit}.json`)
    .then(response => response.json())
    .then(json => json.data.children.map(child => child.data));
};

const search = (context, event) =>
  new Promise((resolve, reject) => {
    if (event?.query?.subreddit) {
      // or:
      // throw new Error('No query specified');
      return resolve(getSearchResults(event.query));
    }
    return reject('No query specified');
  });

// ...
export const searchMachine = createMachine({
  id: 'search',
  initial: 'idle',
  context: {
    errorMessage: undefined,
    subreddit: 'xstate',
    posts: null,
    lastUpdated: null,
  },
  states: {
    idle: {
      on: {
        SEARCH: { target: 'searching' },
      },
      entry: send({ type: 'SEARCH', query: { subreddit: 'xstate' } }),
    },
    searching: {
      invoke: {
        id: 'search',
        src: search,
        onError: {
          target: 'failure',
          actions: assign({
            errorMessage: (context, event) => {
              // event is:
              // { type: 'error.platform', data: 'No query specified' }
              return event.data;
            },
          }),
        },
        onDone: {
          target: 'success',
          actions: assign({ posts: (_, event) => event.data, lastUpdated: () => Date.now() }),
        },
      },
    },
    success: {},
    failure: {},
  },
});
