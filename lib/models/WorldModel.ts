import { WeaponModel } from "@/models/WeaponModel";
import { ShieldModel } from "@/models/ShieldModel";
import { ItemModel } from "@/models/ItemModel";
import { EnemyModel } from "@/models/EnemyModel";
import { PlayerModel } from "@/models/PlayerModel";
import { BookModel } from "@/models/BookModel";
import { NPCModel } from "./NPCModel";
import { NeutralModel } from "./NeutralModel";

export type WorldModel = {
  playerSet: PlayerModel[];
  itemSet: ItemModel[];
  enemySet: EnemyModel[];
  neutralSet: NeutralModel[];
  npcSet: NPCModel[];
  shieldSet: ShieldModel[];
  weaponSet: WeaponModel[];
  type: string;
  name: string;
  description: string;
  population: number;
  skin: string;
  created_on: string;
  updated_on: string;
  bookSet: BookModel[];
  year: number;
};
