import {Record} from "immutable";

const SettingsModel = Record({
  tooltips: true,
  paperdoll: true,
  scoreboard: true,
  backpack: true,
  settings: false, 
  log: true, 
});

export default SettingsModel;