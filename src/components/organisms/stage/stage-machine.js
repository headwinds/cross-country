import { Machine, interpret, send, assign } from 'xstate';
import PusherService from '../../../../services/pusher-service';
import c from '../../../../constants/';

const stageMachine = Machine({
  initial: 'initializing',
  context: {
    playerName: null,
    playerId: null,
  },
  invoke: {
    id: 'socket',
    src: (context, event) => (callback, onEvent) => {
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

export default stageMachine;
