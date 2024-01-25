import { createMachine, assign, interpret, send } from 'xstate';

// import c from '../../../../../constants';
//import PusherService from '../../../../../services/pusher-service';
import { getDocument } from '../../../../../utils/server-side-util';

const localUrl = 'http://127.0.0.1:5000';
const remoteUrl = 'https://scout.vercel.app';

const screenDocument = getDocument();
const url = screenDocument?.domain?.includes('localhost') ? localUrl : remoteUrl;

const MAP_URL = `${url}/api/world/map`;
const MAP_WALK_URL = `${url}/api/world/map/walk`;

const palette = ['#774f38', '#e08e79', '#f1d4af', '#ece5ce', '#c5e0dc'];

const mockTileModelCollection = [{ id: 0, letter: 'C', fill: '#c5e0dc' }];

const getTestTileModelCollection = () => {
  return mockTileModelCollection;
};

const mock_map = [
  ['S', 'F', 'F', 'F'],
  ['F', 'H', 'F', 'H'],
  ['F', 'F', 'F', 'H'],
  ['H', 'F', 'F', 'G'],
];

const colors = {
  S: palette[0],
  F: palette[1],
  H: palette[2],
  G: palette[3],
  C: palette[4],
};

const defaultHunterModel = {
  id: 0,
  type: 'hunter',
  customStyle: {},
  tileModel: { id: 0, x: 0, y: 0, name: 'C', fill: colors.C },
  actorModel: { name: 'headwinds', health: 100, speed: 1, attack: 1, defense: 1, isDead: false },
};

const defaultCaveTrollModel = {
  id: 1,
  type: 'troll',
  customStyle: {},
  tileModel: { id: 0, x: 0, y: 0, name: 'C', fill: colors.C },
  actorModel: { name: 'angBok', health: 100, speed: 1, attack: 1, defense: 1, isDead: false },
};

const initialContext = {
  palette,
  isIsometric: false,
  tileSize: 90,
  generatedMap: [],
  tileModels: [],
  isMapGenerated: false,
  actorModels: [defaultHunterModel, defaultCaveTrollModel],
  //channel: PusherService.createPusherChannel(c.APP_KEY, c.APP_CLUSTER, c.CHANNEL_NAME),
};

const onEntryHandler = (context, event) => {
  console.log('onEntryHandler context: ', context);
};

const sayHi = (context, event) => {
  console.log('CaveTrollMachine Hiiiiii!!!!: ', context);
};

const onPusherResponse = (context, event) => {
  console.log('CaveTrollMachine onPusherResponse: ', context);
};

const fetchMap = (context, event) => {
  console.log('Cross Country: cave-troll-machine fetchMap called...', context);

  // let's disable this for now
  return null;

  fetch(`${MAP_URL}`)
    .then(response => {
      console.log('Cross Country: cave-troll-machine fetchMap ...heard response: ', response);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Network response was not ok.');
      }
    })
    .then(data => {
      console.log('Cross Country: cave-troll-machine fetchMap ...json data: ', data);
      return data;
    })
    .catch(error => {
      console.error('Error:', error);
    });
};

const updateTileModelsAfterMapGenerated = (context, event) => {
  const total = 6;
  const mapWithStartPosition = event.generatedMap;

  const range = [...Array(total).keys()];

  let i = -1;
  let j = -1;
  const updatedTileModels = range.reduce((acc, index) => {
    if (index % 4 === 0) {
      i++;
      j = -1;
    }
    j++;
    const letter = mapWithStartPosition[i][j];

    return [...acc, { id: index, letter, fill: colors[letter] }];
  }, []);

  console.log('updateTileModelsAfterMapGenerated here updatedTileModels: ', updatedTileModels);

  return updatedTileModels;
};

export const caveTrollMachine = createMachine(
  {
    context: initialContext,
    invoke: {
      id: 'socket',
      src: (context, event) => (callback, onEvent) => {
        //const { channel } = context;

        setTimeout(function () {
          callback({ type: 'FETCH_USER_MAP' });
        }, 1000);

        const onGetMapSuccessHandler = data => {
          console.log('Cross Country: cave-troll-machine onGetMapSuccessHandler called...', data);
          const {
            result: { map },
          } = data;

          callback({ type: 'PUSHER_FOUND_MAP_SUCCESS', generatedMap: map });
        };

        //PusherService.bindToPusher(channel, c.GET_MAP_SUCCESS, onGetMapSuccessHandler);
      },
    },
    predictableActionArguments: true,
    id: 'caveTroll',
    initial: 'idle',
    states: {
      idle: {
        on: {
          FETCH_USER_MAP: {
            target: 'loadingUserMap',
          },
          SAY_HI: {
            target: 'sayingHi',
          },
        },
      },

      sayingHi: {
        invoke: {
          id: 'sayHi',
          src: sayHi,
          target: 'idle',
        },
      },
      loadingUserMap: {
        target: 'idle',
        invoke: {
          id: 'fetch-user-map',
          src: fetchMap,
        },
        on: {
          PUSHER_FOUND_MAP_SUCCESS: {
            target: 'respondingToPusher',
            actions: assign({
              isMapGenerated: true,
              generatedMap: (context, event) => event.generatedMap,
              tileModels: updateTileModelsAfterMapGenerated, //getTestTileModelCollection(), // doesn't work
            }),
          },
        },
      },
      respondingToPusher: {
        invoke: {
          id: 'onPusherResponse',
          src: onPusherResponse,
          target: 'idle',
        },
        on: {
          UPDATE_TILE_MODELS: {
            target: 'idle',
            actions: assign({
              tileModels: (context, event) => event.updatedTileModels,
            }),
          },
        },
      },
    },
  },
  {
    actions: {},
    guards: {},
  }
);
