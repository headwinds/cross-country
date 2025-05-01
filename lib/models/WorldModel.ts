import { WeaponModel } from "@/lib/models/WeaponModel";
import { ShieldModel } from "@/lib/models/ShieldModel";
import { ItemModel } from "@/lib/models/ItemModel";
import { EnemyModel } from "@/lib/models/EnemyModel";
import { PlayerModel } from "@/lib/models/PlayerModel";
import { BookModel } from "@/lib/models/BookModel";
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
