import { createMachine, assign, interpret, send, Machine } from 'xstate';
import PusherService from '../../../services/pusher-service';
import c from '../../../constants/';

/*
https://www.wordsapi.com/
.get("https://wordsapiv1.p.mashape.com/words?letterPattern=^a.{4}$")
.header("X-Mashape-Key", "<required>")
.header("Accept", "application/json")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});
*/

const localUrl = 'http://0.0.0.0:5000';
const remoteUrl = 'https://www.wordsapi.com/';

const url = document.domain.includes('localhost') ? remoteUrl : remoteUrl;

const tileSize = 90;

const initialContext = {
  isBoundToPusher: false,
  isFetching: false,
  hasModal: false,
  isIsometric: false,
  tileSize,
};

const fetchConfig = { mode: 'no-cors' };
const invokeFetchSubreddit = context => {
  const { subreddit } = context;

  console.log('sub-word-search-machine - invokeFetchSubreddit', subreddit);

  return fetch(`https://www.reddit.com/r/${subreddit}.json`)
    .then(response => response.json())
    .then(json => json.data.children.map(child => child.data));
};

const onLoaderHander = event => {
  console.log('sub-word-search-machine - onLoaderHander', event);
};

export const createSubWordSearchMachine = (subreddit = 'tinyhouse') => {
  console.log('sub-word-search-machine subreddit: ', subreddit);
  return Machine({
    id: 'subreddit',
    initial: 'loading',
    context: {
      subreddit,
      posts: null,
      lastUpdated: null,
    },
    states: {
      loading: {
        invoke: {
          id: 'fetch-subreddit',
          src: invokeFetchSubreddit,
          onDone: {
            target: 'loaded',
            actions: assign({
              posts: (_, event) => event.data,
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
