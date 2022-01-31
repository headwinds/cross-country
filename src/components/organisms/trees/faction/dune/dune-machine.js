import { createMachine, assign } from 'xstate';
import * as d3 from 'd3';

const loadData = (context, event) => {
  new Promise(async (resolve, reject) => {
    // d3.json('dune.json', onDataLoadedCallback);
    const result = await d3.json('dune.json'); //await addTheBooks(context, event);
    console.log('loadData result: ', result);
    if (result.status === 200) {
      resolve(result);
    } else {
      reject('data');
    }
  });
};

export const loadDataMachine = createMachine({
  id: 'loadDataMachine',
  initial: 'start',
  states: {
    start: {},
    loading: {
      invoke: {
        src: loadData,
      },
      onDone: {
        target: 'success',
        actions: assign({ data: (_context, event) => event.data }),
      },
      onError: {
        target: 'failure',
        actions: assign({ error: (_context, event) => event.data }),
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

export const duneMachine = createMachine({
  id: 'duneMachine',
  initial: 'init',
  context: {
    data: null,
    error: null,
  },
  states: {
    init: {},
    loadDataMachine,
  },
  on: {
    FETCH_DATA: {
      target: 'loadDataMachine.loading',
    },
  },
});
