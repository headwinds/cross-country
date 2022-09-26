import {Record} from "immutable";

const ShieldModel = Record({
  id: 0,
  name: 'generic item',
  modifies: "none",
  by: 0,
  type: 'shield',
  protection: 10,
  skin: '',
});

export default ShieldModel;