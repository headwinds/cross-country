const GET_MAP = 'get map';
const GET_MAP_SUCCESS = 'get map success';
const GET_MAP_FAIL = 'get map fail';

const WALK_MAP = 'walk map';
const WALK_MAP_SUCCESS = 'walk map success';

const WARM_SATELLITES = 'warm satellites';
const WARM_SATELLITES_COMPLETE = 'warm satellites complete';

/*
const APP_KEY = process.env.PUSHER_DEV_KEY;
const APP_CLUSTER = process.env.PUSHER_DEV_CLUSTER;
*/
const APP_KEY = 'af0cc5fe0ac96ae0af44';
const APP_CLUSTER = 'us2';

const CHANNEL_NAME = 'theisland';

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
