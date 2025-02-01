type WeaponModel = {
  id: number;
  name: string;
  modifies: string;
  by: number;
  type: string;
  damage: number;
  skin: string;
};

export default WeaponModel;

// You can create a default weapon if needed
export const defaultWeapon: WeaponModel = {
  id: 0,
  name: "generic item",
  modifies: "none",
  by: 0,
  type: "weapon",
  damage: 10,
  skin: "",
};
