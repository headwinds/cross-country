import { createMachine, assign } from 'xstate';

const localUrl = 'http://localhost:5003';
const remoteUrl = 'https://scout-theisland.vercel.app';

const url = document.domain.includes('localhost') ? localUrl : remoteUrl;

// local
const MAP_URL = `${url}/api/environment/frozen-lake/map`;
const WALKTHROUGH_URL = `${url}/api/environment/frozen-lake/walkthrough`;

const initialContext = {
  generatedMap: [],
  isMapLoaded: false,
};

const fetchMap = () =>
  fetch(`${MAP_URL}`)
    .then(blob => blob.json())
    .then(data => {
      return data;
    })
    .catch(console.log);

const positionPlayer = () => {
  console.log('positionPlayer');
};

export const frozenLakeMachine = createMachine({
  id: 'frozenLake',
  initial: 'init',
  context: initialContext,
  states: {
    init: {
      on: {
        INIT_MAP: 'loadingMap',
      },
    },
    positionPlayer: {
      on: {
        POSITION_PLAYER: positionPlayer,
      },
    },
    resetting: {
      // how would we reset the game?
      // assign({ generatedMap: (context, event) => event.data.generatedMap })
    },
    idle: {
      on: {},
    },
    loadingMap: {
      invoke: {
        id: 'getMap',
        src: (context, event) => fetchMap(),
        onDone: {
          target: 'loadingMapSuccess',
          actions: assign({ generatedMap: (context, event) => event.data.generatedMap }),
        },
        onError: {
          target: 'loadingMapFailure',
          actions: assign({ error: (context, event) => event.data }),
        },
      },
    },
    loadingMapSuccess: {
      // after the map is loaded, we can start the game and position the player
      on: {},
    },
    loadingMapFailure: {
      on: {
        RETRY: 'loadingMap',
      },
    },
  },
});
