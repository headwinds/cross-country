import {Record} from "immutable";

const PlayerModel = Record({
	name: '', // player not created
	skin: '',  
	type: 'player',
	profession:'',
	level:1,
	experience:0,
	staminia:100,
	mana: 100,
	health: 100,
	core: 80, // 100 deadly fever - 0 frozen - 80 fine - 40 freezing
	xp: 100,
	gold: 0,
	currency: {
		gold: 0,
		silver: 0,
		copper: 500
	},
	weapon: {
		name: 'Fist',
		damage: 100
	},
	shield: {
		name: 'Pants',
		protection: 1
	},
	examining: {
		iconClass: "floor",
		title: "",
		action: "Look",
		aroundMe: "press l to look around",
	},
	inventory: [], // as a mechanic I want to limit the investory to 6 items
	npcsAroundMe: [],
	username: '',
});

export default PlayerModel;