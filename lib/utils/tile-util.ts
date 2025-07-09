const tile = {
  label: "",
  description: "",
  material: "",
  movement_cost: 0,
  elevation: 0,
  color: "#000",
  skin: "",
  damage: 0,
  age: -1, // doesn't age
  fill: "lightblue",
  name: "",
  type: "default",
  is_obstacle: false,
  obstacle_remover: "none",
  id: "",
};

export const createDemoModels = (totalModels: number = 9) => {
  const range = [...Array(totalModels).keys()];
  return range.map((index) => {
    return { id: String(index), ...tile };
  });
};
