import { useEffect } from 'react';
import { useMachine } from '@xstate/react';
import { Machine, assign } from 'xstate';

const MAP_URL = 'https://theisland-headwinds1.vercel.app/api/environment/frozen-lake/map';
const WALKTHROUGH_URL = 'https://theisland-headwinds1.vercel.app/api/environment/frozen-lake/walkthrough';

/*
const fetchUser = map =>
  fetch(`${SERVICE_URL}/${map}`)
    .then(blob => blob.json())
    .then(data => {
      if (data.message) {
        return
      }
      return data
    })
    .catch(console.log)
*/

const fetchMap = () =>
  fetch(`${MAP_URL}`)
    .then(blob => blob.json())
    .then(data => {
      console.log('fetch data: ', data);

      return data;
    })
    .catch(console.log);

/*
how to pass an argument 
src: (context, event) => fetchUser(context.username),
*/

const frokenLakeMachine = Machine({
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

export const useFrozenLakeService = () => {
  const [current, send] = useMachine(frokenLakeMachine);

  useEffect(() => {
    send('FETCH');
  }, [send]);

  return [current, send];
};
