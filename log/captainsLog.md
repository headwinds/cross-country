# Captain's log

#### April 24,2023

I want to port this experiment as a mission to draw a tiny island from a matrix and be able to click on a tile to change it.

The matrix would update with the change. So the goal would be to move from:

```
const islandMap = [
  ["0", "0", "0", "1", "0"],
  ["0", "1", "0", "0", "0"],
  ["0", "1", "1", "0", "0"],
  ["0", "0", "0", "0", "0"]
];
```

By adding a cabin, I should see:

```
const islandMap = [
  ["0", "0", "0", "1", "0"],
  ["0", "1", "0", "0", "0"],
  ["0", "1", "2", "0", "0"],
  ["0", "0", "0", "0", "0"]
];
```

### Stretch Goals

```
const tileMap = new Map();

contacts.set("0", { label: "water" });
contacts.set("1", { label: "land" });
contacts.set("2", { label: "wall" });
```

```
const onTileMap = new Map();

contacts.set("0", { label: "npc" });
contacts.set("1", { label: "food" });
contacts.set("2", { label: "quest" });
contacts.set("3", { label: "monster", type: "common" });
contacts.set("4", { label: "item" });
contacts.set("5", { label: "trap" });
contacts.set("6", { label: "door" });
```

[leetcode island](https://codesandbox.io/s/leetcode-largest-island-iyu3m0)
