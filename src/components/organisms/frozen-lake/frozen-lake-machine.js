import { createMachine, assign, interpret, send } from 'xstate';
import PusherService from '../../../services/pusher-service';
import c from '../../../constants/';
import book from './frozen-lake-book';

const localUrl = 'http://localhost:5000';
const remoteUrl = 'https://scout.vercel.app';

const url = document.domain.includes('localhost') ? localUrl : remoteUrl;

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

const createTileModels = (total, generatedMap) => {
  const startPositions = ['C', 'C', 'C', 'C'];
  const mapWithStartPosition = [startPositions, ...generatedMap];

  const range = [...Array(total).keys()];

  console.log('createTileModels: range: ', range);
  /*
  let i = -1;
  let j = -1;

  const tileModels = range.map(index => {
    if (index % 4 === 0) {
      i++;
      j = -1;
    }
    j++;
    const letter = mapWithStartPosition[i][j];
    return { id: index, letter, fill: colors[letter] };
  });
  */

  //let i = -1;
  //let j = -1;
  const tileModels = range.reduce((acc, index) => {
    /*
    if (index % 4 === 0) {
      i++;
      j = -1;
    }
    j++;
    const letter = mapWithStartPosition[i][j];
    */
    const letter = 'C';

    return [...acc, { id: index, letter, fill: colors[letter] }];
  }, []);

  console.log('createTileModels: tileModels: ', tileModels);

  return mockTileModelCollection;
};

const updateTileModelsAfterMapGenerated = (context, event) => {
  const totalCampRow = 1;
  const total = (context.generatedMap.length + totalCampRow) * 4;

  const updatedTileModels = createTileModels(total, event.generatedMap);
  console.log('updateTileModelsAfterMapGenerated here updatedTileModels: ', updatedTileModels);

  return updatedTileModels;
};

const findParagrah = book => {
  const { currentChapterId } = book;

  const chapter = book.chapters.find(chapter => chapter.id === currentChapterId);
  const { pages, currentPageId } = chapter;
  const page = pages.find(page => page.id === currentPageId);
  const { paragraphs, currentParagraphId } = page;

  const paragraph = paragraphs.find(paragraph => paragraph.id === currentParagraphId);

  return paragraph;
};

const defaultConfig = {
  column: { customClass: '', customStyle: {}, rest: {} },
  text: { customClass: '', customStyle: {}, rest: {} },
};

const tileSize = 90;

const defaultHunterModel = {
  id: 0,
  type: 'hunter',
  customStyle: {},
  tileModel: { id: 0, x: 0, y: 0, name: 'C', fill: colors.C },
};

const defaultWarriorModel = {
  id: 1,
  type: 'warrior',
  customStyle: {},
  tileModel: { id: 1, x: 0, y: 0, name: 'C', fill: colors.C },
};

const initialContext = {
  actorModels: [defaultHunterModel, defaultWarriorModel],
  tileModelCollection: [],
  generatedMap: [],
  isMapGenerated: false,
  book,
  currentParagraph: findParagrah(book),
  mapWalkRecommendation: [],
  isBoundToPusher: false,
  isFetching: false,
  hasModal: false,
  isIsometric: false,
  tileSize,
  turn: 0,
  scoutMessage: '',
};

// this now going to be a request
// the result will arrive via the channel!
const fetchMap = () => {
  console.log('Cross Country: frozen-lake-machine fetchMap called...');
  fetch(`${MAP_URL}`)
    .then(response => {
      console.log('Cross Country: frozen-lake-machine fetchMap ...heard response: ', response);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Network response was not ok.');
      }
    })
    .then(data => {
      console.log('Cross Country: frozen-lake-machine fetchMap ...json data: ', data);
      return data;
    })
    .catch(error => {
      console.error('Error:', error);
    });
};

const fetchMapWalk = () => {
  console.log('Cross Country: frozen-lake-machine fetchMapWalk called...');
  fetch(`${MAP_WALK_URL}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Network response was not ok.');
      }
    })
    .then(data => {
      return data;
    })
    .catch(error => {
      console.error('Error:', error);
    });
};

const updateGeneratedMap = (context, event) => {
  return event.generatedMap;
};

const updateTileModels = (context, event) => {
  const { tileModels } = event;
  return tileModels;
};

const logError = (context, event) => {
  console.log('Something went wrong logError: ', event);
  return { message: 'something went wrong' };
};

const onDataChanged = (context, event) => {
  console.log('---------- onDataChanged ------------');
  console.log('event:', event);
  console.log('context:', context);
  // {id: 0, letter: 'C', fill: '#c5e0dc', x: 120, y: 379.515625}
  //const { actorModels } = context;
  return event.data;
};

const updateTileModelCollection = assign({
  tileModelCollection: onDataChanged,
});
const setIsBoundToPusher = assign({
  isBoundToPusher: true,
});

const setGeneratedMap = assign({
  isMapGenerated: true,
});

let serviceContext = null;
let channel = null;

export const frozenLakeMachine = createMachine(
  {
    id: 'frozenLake',
    initial: 'idle',
    context: initialContext,
    invoke: {
      id: 'socket',
      src: (context, event) => (callback, onEvent) => {
        serviceContext = context;

        setTimeout(function () {
          callback({ type: 'FETCH_USER_MAP' });
        }, 1000);

        const onGetMapSuccessHandler = data => {
          const {
            result: { map },
          } = data;

          callback({ type: 'PUSHER_FOUND_MAP_SUCCESS', generatedMap: map });
        };

        const onWalkMapSuccessHandler = data => {
          const {
            result: { map },
          } = data;

          //callback({ type: 'FETCH_MAP_SUCCESS', generatedMap: map });
        };

        channel = PusherService.createPusherChannel(c.APP_KEY, c.APP_CLUSTER, c.CHANNEL_NAME);
        PusherService.bindToPusher(channel, c.GET_MAP_SUCCESS, onGetMapSuccessHandler);
        PusherService.bindToPusher(channel, c.WALK_MAP_SUCCESS, onWalkMapSuccessHandler);
      },
    },
    states: {
      idle: {
        on: {
          FETCH_USER_MAP: 'loadingUserMap',
          FETCH_MAP_WALK: 'loadingMapWalk',
          SERVICE_STARTED: 'startService',
          UPDATE_TILE_MODELS: {
            target: 'idle',
          },
          DATA_CHANGED: {
            target: 'idle',
            entry: ['updateTileModelCollection'],
          },
        },
      },
      resetting: {
        // how would we reset the game?
        // assign({ generatedMap: (context, event) => event.data.generatedMap })
      },
      startService: {
        on: {
          RETURN_TO_IDLE: {
            target: 'idle',
          },
        },
      },
      loadingUserMap: {
        invoke: {
          id: 'fetch-user-map',
          src: fetchMap,
          onDone: {
            target: 'successUserMapLoad',
            actions: assign({
              posts: (_, event) => event.data,
              lastUpdated: () => Date.now(),
              messsage: (_, event) => {
                console.log('successUserMapLoad event: ', event);
                // {message: 'satellites are preparing the map'}
                return event.data;
              },
            }),
          },
          onError: 'failureUserMapLoad',
        },
        on: {
          PUSHER_FOUND_MAP_SUCCESS: {
            target: 'renderTileModels',
            actions: assign({
              generatedMap: updateGeneratedMap,
              isMapGenerated: true,
              //tileModelCollection: updateTileModelsAfterMapGenerated, //getTestTileModelCollection(), // doesn't work
            }),
          },
        },
      },
      successUserMapLoad: {
        on: {
          REFRESH: 'loadingUserMap',
        },
      },
      failureUserMapLoad: {
        on: {
          RETRY: 'loadingUserMap',
        },
      },
      renderTileModels: {
        onEntry: {
          actions: assign({
            tileModelCollection: updateTileModelsAfterMapGenerated,
          }),
        },
        entry: ['activate'],
      },
      error: {
        onEntry: {
          actions: assign({
            error: (_, event) => {
              message: 'something went wrong';
            },
          }),
        },
      },
      loadingMapWalk: {
        invoke: {
          id: 'getMapWalk',
          src: (context, event) => fetchMapWalk(),
        },
      },
      loadingMapWalkSuccess: {
        // we can now move the player across the map
        on: {},
      },
      loadingMapWalkFailure: {
        on: {
          RETRY: 'loadingMapWalk',
        },
      },
    },
  },
  {
    actions: {
      activate: assign({
        tileModelCollection: updateTileModelsAfterMapGenerated,
      }),
    },
    guards: {},
  }
);

// Interpret the machine, and add a listener for whenever a transition occurs.
/*
const service = interpret(frozenLakeMachine).onTransition(state => {
  console.log('XState transition state.value: ', state.value);
});
*/

// Start the service
// service.start();

// Send events
// service.send({ type: 'SERVICE_STARTED' });

// Send events
// service.send({ type: 'RETURN_TO_IDLE' });

// Stop the service when you are no longer using it.
// service.stop();
