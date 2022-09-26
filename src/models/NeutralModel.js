import {Record} from "immutable";

const NeutralModel = Record({
    id: 0,
    type: "neutral",
    name: "",
    health: 100,
    weapon: "",
    armour: "",
    speed: 10,
    accuracy: 10,
    treaure: [],
    skin: '',
  });

export default NeutralModel;