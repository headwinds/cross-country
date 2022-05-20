import { Machine, interpret, send, assign } from 'xstate';
import PusherService from '../../../services/pusher-service';
import c from '../../../constants/';

let serviceContext = null;

const stageMachine = Machine({
  initial: 'initializing',
  context: {
    playerName: null,
    playerId: null,
  },
  invoke: {
    id: 'socket',
    src: (context, event) => (callback, onEvent) => {
      serviceContext = context;

      setTimeout(function () {
        callback({ type: 'SOCKET_CONNECTED' });
      }, 1000);

      onEvent(e => {
        switch (e.type) {
          case 'EMIT_JOIN_GAME':
            setTimeout(function () {
              callback({ type: 'PLAYER_JOIN_SUCCESSFUL', playerId: 17 });
            }, 3000);
            break;
          case 'EMIT_QUIT_GAME':

            setTimeout(function () {
              callback('QUIT_SUCCESSFUL');
            });
            break;
        }
      });
    },
  },
  states: {
    initializing: {
      on: {
        SOCKET_CONNECTED: 'join_screen',
      },
    },
    join_screen: {
      on: {
        PLAYER_CLICKED_JOIN: {
          target: 'joining',
          actions: assign({ playerName: (c, e) => e.playerName }),
        },
      },
    },
    joining: {
      onEntry: send('EMIT_JOIN_GAME', { to: 'socket' }),
      on: {
        PLAYER_JOIN_SUCCESSFUL: {
          target: 'game_screen',
          actions: assign({ playerId: (c, e) => e.playerId }),
        },
      },
    },
    game_screen: {
      on: {
        PLAYER_CLICKED_QUIT: {
          actions: send('EMIT_QUIT_GAME', { to: 'socket' }),
          target: 'join_screen',
        },
      },
    },
  },
});
/*
let service;
service = interpret(stageMachine)
  .onTransition(function (nextState) {
    if (service) {
      // this outputs "true" the first transition but "false" on subsequent transitions, demonstrating
      // the context object passed the service diverges from the the one on the service
      console.log(
        'Stage Machine - serviceContext === service.state.context?',
        serviceContext === service.state.context
      );
    }
  })
  .start();

setTimeout(function () {
  service.send('PLAYER_CLICKED_JOIN', { playerName: 'glenn' });
}, 1500);

setTimeout(function () {
  console.log('Stage Machine - done');
}, 5000);
*/

export default stageMachine;
