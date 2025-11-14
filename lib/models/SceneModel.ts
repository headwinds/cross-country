/*
0. We find a spot, drink our favorite potion and dream up a focal point for our scene. 
1. We are prompted to create a scene and set the grid size. It defaults to a chessboard grid of 8x8 tiles.
2. We define stage within the scene. For instance, set 3x3 tiles as the stage and any tiles outside will be considered dark or in a fog. The edge of 3x3 tiles will be called the fringe. 
3. We place players and objects within the scene. Both player and objects can considered actors as they play a role in the scene.
4. We define the rules of the scene. For instance, we can define the rules of movement and interactions which begin and end the turn.
5. We play the scene, and tweak the rules as we go.  
6. Once content, we can either share the scene and/or move on to the next adventure.
*/

import { ActorModel } from "@/lib/models/ActorModel";
import { PlayerModel } from "@/lib/models/PlayerModel";
import { UserModel } from "@/lib/models/UserModel";
import { ItemModel } from "@/lib/models/ItemModel";
import { EnemyModel } from "@/lib/models/EnemyModel";
import { NeutralModel } from "@/lib/models/NeutralModel";
import { NPCModel } from "@/lib/models/NPCModel";
import { ShieldModel } from "@/lib/models/ShieldModel";
import { WeaponModel } from "@/lib/models/WeaponModel";
import { QuestModel } from "@/lib/models/QuestModel";

export interface SceneModel {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  author: UserModel;
  players: PlayerModel[];
  items: ItemModel[]; // items are objects that can be picked up and used by the player
  gridSize: number;
  stage: number;
  fringe: number;
  actors: ActorModel[];
  enemies: EnemyModel[];
  neutrals: NeutralModel[];
  npcs: NPCModel[];
  shields: ShieldModel[];
  weapons: WeaponModel[];
  quests: QuestModel[];
}
