const GET_MAP = 'get map';
const GET_MAP_SUCCESS = 'get map success';
const GET_MAP_FAIL = 'get map fail';

const WALK_MAP = 'walk map';
const WALK_MAP_SUCCESS = 'walk map success';

const WARM_SATELLITES = 'warm satellites';
const WARM_SATELLITES_COMPLETE = 'warm satellites complete';

const APP_KEY = '972023';
const APP_CLUSTER = '4997b3ff2dc103500a8d';
const CHANNEL_NAME = 'theisland';

//const APP_KEY = process.env.PUSHER_DEV_KEY;
//const APP_CLUSTER = process.env.PUSHER_DEV_CLUSTER;

const constants = {
  GET_MAP,
  GET_MAP_SUCCESS,
  GET_MAP_FAIL,
  WALK_MAP,
  WALK_MAP_SUCCESS,
  WARM_SATELLITES,
  WARM_SATELLITES_COMPLETE,
  APP_KEY,
  APP_CLUSTER,
  CHANNEL_NAME,
};

export default constants;
