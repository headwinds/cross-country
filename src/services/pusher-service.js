//import c from '../constants/';
import Pusher from 'pusher-js';

/*
channel.bind('pusher:subscription_succeeded', function () {
  // Yipee!!
  console.log('Buffalo: Pusher subscription succeeded');
});

channel.bind('pusher:subscription_error', function () {
  // Oh nooooos!
  console.log('Buffalo: Pusher subscription error');
});

channel.bind(c.WALK_MAP, function (data) {
  console.log('Frozen Lake: We heard pusher event data for walk map:', data);
});

channel.bind(c.WARM_SATELLITES, function (data) {
  console.log('Buffalo: We heard pusher event data for warm satellites:', data);
});

channel.bind(c.WARM_SATELLITES_COMPLETE, function (data) {
  console.log('Buffalo: We heard pusher event data for warm satellites complete:', data);
});
*/

/*
channel.bind(c.GET_MAP_SUCCESS, function (data) {
  console.log('Frozen Lake: We heard pusher event data for get map:', data);

  const {
    result: { map },
  } = data;

  //const newDemoModels = createDemoModels(16, map);
  //setDemoModels(newDemoModels);
});*/

/*
const onGetMapSuccessHandler = data => {
  console.log('Frozen Lake: We heard pusher event data for get map:', data);

  const {
    result: { map },
  } = data;

  //const newDemoModels = createDemoModels(16, map);
  //setDemoModels(newDemoModels);
};
*/

const createPusherChannel = (appKey, appCluster, channelName) => {
  const pusherClient = new Pusher(appKey, {
    cluster: appCluster,
    encrypted: false,
  });

  const channel = pusherClient.subscribe(channelName);

  return channel;
};

const bindToPusher = (channel, eventName, callback) => {
  channel.bind(eventName, callback);
};

const PusherService = {
  bindToPusher,
  createPusherChannel,
};

export default PusherService;
