export type ShieldModel = {
  id: number;
  name: string;
  modifies: string;
  by: number;
  type: "shield";
  protection: number;
  skin: string;
};

export const defaultShield: ShieldModel = {
  id: 0,
  name: "Basic Shield",
  modifies: "defense",
  by: 2,
  type: "shield",
  protection: 5,
  skin: "default_shield",
};
