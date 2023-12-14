import {Record} from "immutable";

/*
https://twitter.com/kurtruslfanclub/status/1088023995612520449
👻 Desired Player Behaviour
🦇 Appearance Rule
👾 Surprise Structure
🐺 Defeat Requirements
👽 Alert Rules
👹 When to fight / to take flight
*/

import WeaponModel from "./WeaponModel";
import ShieldModel from "./ShieldModel";

const EnemyModel = Record({
    id: 0,
    type: "enemy",
    name: "",
    health: 100,
    weapon: WeaponModel({name: "fist", damage: 100}),
	shield: ShieldModel({name: "cloak", protection: 100}),
    speed: 10,
    accuracy: 10,
    skin: '',
    spells: [],
    level: 1
});

export default EnemyModel;