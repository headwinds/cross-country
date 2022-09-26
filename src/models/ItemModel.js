import {Record} from "immutable";

const ItemModel = Record({
  id: 0,
  name: "generic item",
  modifies: "health",
  by: 10,
  type: "item",
  skin: "",
});

export default ItemModel;