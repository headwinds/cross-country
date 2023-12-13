// actors should be imported

const neutralType = {
  type: "neutral",
  name: "",
  health: 100,
  weapon: "",
  armour: "",
  speed: 10,
  accuracy: 10,
  treaure: []
}

const neutralCreatures = [
  {
    type: "neutral",
    name: "Jack Rabbit",
    health: 5,
    weapon: {name: "teeth", protection: 1},
    armour: {name: "fur", protection: 10},
    speed: 1,
    accuracy: 1,
    treaure: [{name: "pelt", cost: {gold: 0, silver: 0, copper: 5}}]
  },
  {
    type: "neutral",
    name: "Cariboo",
    health: 25,
    weapon: {name: "horns", damage: 100},
    armour: {name: "fur", protection: 10},
    speed: 10,
    accuracy: 10,
    treaure: [{name: "hide", cost: {gold: 0, silver: 0, copper: 25}}]
  },
  {
    type: "neutral",
    name: "Buffalo",
    health: 1225,
    weapon: {name: "horns", damage: 100},
    armour: {name: "fur", protection: 1},
    speed: 10,
    accuracy: 100,
    treaure: [{name: "hide", cost: {gold: 1, silver: 10, copper: 25}}]
  }
]

export default neutralCreatures;
