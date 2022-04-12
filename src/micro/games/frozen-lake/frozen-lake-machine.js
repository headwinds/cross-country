//import { createMachine, assign } from 'xstate';
import { createMachine, assign } from 'xstate';

const localUrl = 'http://localhost:5003';
const remoteUrl = 'https://scout-theisland.vercel.app';

const url = document.domain.includes('localhost') ? localUrl : remoteUrl;

// local
const MAP_URL = `${url}/api/environment/frozen-lake/map`;
const WALKTHROUGH_URL = `${url}/api/environment/frozen-lake/walkthrough`;

const fetchMap = () =>
  fetch(`${MAP_URL}`)
    .then(blob => blob.json())
    .then(data => {
      return data;
    })
    .catch(console.log);

export const frozenLakeMachine = createMachine({
  id: 'frozenLake',
  initial: 'idle',
  context: {
    generatedMap: [],
  },
  states: {
    idle: {
      on: {
        FETCH: 'loading',
      },
    },
    loading: {
      invoke: {
        id: 'getMap',
        src: (context, event) => fetchMap(),
        onDone: {
          target: 'success',
          actions: assign({ generatedMap: (context, event) => event.data.generatedMap }),
        },
        onError: {
          target: 'failure',
          actions: assign({ error: (context, event) => event.data }),
        },
      },
    },
    success: {},
    failure: {
      on: {
        RETRY: 'loading',
      },
    },
  },
});
