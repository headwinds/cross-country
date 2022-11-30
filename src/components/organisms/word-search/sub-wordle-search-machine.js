import { createMachine, assign, interpret, send, Machine } from 'xstate';

/*
Sign up for a free rapidapi account and get your own api key - you need to provide a credit card though
https://www.wordsapi.com/

https://rapidapi.com/dpventures/api/wordsapi/
*/

const remoteUrl = 'https://www.wordsapi.com/';
const url = 'https://wordsapiv1.p.rapidapi.com/words/?letterPattern=%5Ea.%7B4%7D%24&letters=5&limit=100&page=1';

const fetchConfig = { mode: 'no-cors' };

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '800c52069cmshaaa1ef048c8b726p1a4c9cjsn45d331275803',
    'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
  },
};

const invokeFetchWord = context => {
  const { subreddit } = context;

  console.log('sub-word-search-machine - invokeFetchSubreddit', subreddit);

  return (
    fetch(url, options)
      .then(response => response.json())
      //.then(json => json.data.children.map(child => child.data));
      .then(json => {
        console.log('sub-wordle-machine json', json);
        return json;
      })
  );
};

export const createSubWordleSearchMachine = (subreddit = 'tinyhouse') => {
  console.log('sub-word-search-machine subreddit: ', subreddit);
  return Machine({
    id: 'worlds',
    initial: 'loading',
    context: {
      wordleQuery: null,
      pattern: '^[a].{4}$',
      words: null,
      lastUpdated: null,
      totalWords: 0,
    },
    states: {
      loading: {
        invoke: {
          id: 'fetch-word',
          src: invokeFetchWord,
          onDone: {
            target: 'loaded',
            actions: assign({
              wordleQuery: (_, event) => event.data.query,
              words: (_, event) => event.data.results.data,
              totalWords: (_, event) => event.data.results.total,
              lastUpdated: () => Date.now(),
            }),
          },
          onError: 'failure',
        },
      },
      loaded: {
        on: {
          REFRESH: 'loading',
        },
      },
      failure: {
        on: {
          RETRY: 'loading',
        },
      },
    },
  });
};
