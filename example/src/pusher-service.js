import c from './constants/';
import Pusher from 'pusher-js';

const pusherClient = new Pusher(c.APP_KEY, {
  cluster: c.APP_CLUSTER,
  encrypted: false,
});

const channel = pusherClient.subscribe('theisland');

channel.bind('pusher:subscription_succeeded', function () {
  //console.log('Buffalo: Pusher subscription succeeded');
});

channel.bind('pusher:subscription_error', function () {
  //console.log('Buffalo: Pusher subscription error');
});

channel.bind(c.WALK_MAP, function (data) {
  //console.log('Frozen Lake: We heard pusher event data for walk map:', data);
});

channel.bind(c.WARM_SATELLITES, function (data) {
  //console.log('Buffalo: We heard pusher event data for warm satellites:', data);
});

channel.bind(c.WARM_SATELLITES_COMPLETE, function (data) {
  //console.log('Buffalo: We heard pusher event data for warm satellites complete:', data);
});

channel.bind(c.GET_MAP_SUCCESS, function (data) {
  //console.log('Frozen Lake: We heard pusher event data for get map:', data);

  const {
    result: { map },
  } = data;

  //const newDemoModels = createDemoModels(16, map);
  //setDemoModels(newDemoModels);
});

export const bindToPusher = (eventName, callback) => {
  console.log('App: bindToPusher eventName:', eventName);
  channel.bind(eventName, callback);
};

export default channel;
