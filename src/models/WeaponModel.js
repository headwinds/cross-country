import {Record} from "immutable";

const WeaponModel = Record({
  id: 0,
  name: 'generic item',
  modifies: "none",
  by: 0,
  type: 'weapon',
  damage: 10,
  skin: '',
});

export default WeaponModel;